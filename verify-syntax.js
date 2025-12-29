#!/usr/bin/env node

/**
 * Verification script for ArchiCode relationship syntax
 * Tests all relationship types and their variants
 */

const fs = require('fs');

// Read the archicode.js file
const archicodeContent = fs.readFileSync('./archicode.js', 'utf8');

// Extract SYNTAX_TO_RELATIONSHIP object
const syntaxMatch = archicodeContent.match(/const SYNTAX_TO_RELATIONSHIP = \{([^}]+)\}/s);
if (!syntaxMatch) {
    console.error('❌ Could not find SYNTAX_TO_RELATIONSHIP in archicode.js');
    process.exit(1);
}

// Parse the syntax mappings
const syntaxLines = syntaxMatch[1].split('\n').filter(line => line.includes(':'));
const syntaxMap = {};
const duplicates = [];

console.log('🧪 ArchiCode Syntax Verification\n');
console.log('=' .repeat(60));

syntaxLines.forEach(line => {
    const match = line.match(/'([^']+)':\s*'([^']+)'/);
    if (match) {
        const [, syntax, relType] = match;
        if (syntaxMap[syntax]) {
            duplicates.push({ syntax, oldType: syntaxMap[syntax], newType: relType });
        }
        syntaxMap[syntax] = relType;
    }
});

console.log(`\n✅ Found ${Object.keys(syntaxMap).length} unique syntax mappings\n`);

// Check for duplicates
if (duplicates.length > 0) {
    console.log('❌ DUPLICATES FOUND:');
    duplicates.forEach(({ syntax, oldType, newType }) => {
        console.log(`   '${syntax}': was '${oldType}', now '${newType}'`);
    });
    process.exit(1);
} else {
    console.log('✅ No duplicate syntax mappings');
}

// Group by relationship type
const byRelType = {};
Object.entries(syntaxMap).forEach(([syntax, relType]) => {
    if (!byRelType[relType]) byRelType[relType] = [];
    byRelType[relType].push(syntax);
});

console.log('\n📋 Syntax by Relationship Type:\n');
Object.entries(byRelType).sort().forEach(([relType, syntaxes]) => {
    console.log(`  ${relType}:`);
    syntaxes.forEach(syntax => console.log(`    - '${syntax}'`));
});

// Test expected syntaxes
const expectedSyntaxes = {
    'serving': ['->','<-'],
    'flow': ['-->','<--'],
    'realization': ['--:>','<:--'],
    'triggering': ['-|>','<|-'],
    'assignment': ['.--','--.', '.->','<-.','.-|>','<-|.'],
    'composition': ['+-','-+'],
    'aggregation': ['o-','-o'],
    'specialization': ['-:>','<:-'],
    'association': ['---'],
    'access': ['<->']
};

console.log('\n🔍 Verifying expected syntaxes:\n');
let allExpectedFound = true;

Object.entries(expectedSyntaxes).forEach(([relType, syntaxes]) => {
    syntaxes.forEach(syntax => {
        if (syntaxMap[syntax] === relType) {
            console.log(`  ✅ '${syntax}' → ${relType}`);
        } else if (syntaxMap[syntax]) {
            console.log(`  ❌ '${syntax}' → ${syntaxMap[syntax]} (expected: ${relType})`);
            allExpectedFound = false;
        } else {
            console.log(`  ❌ '${syntax}' → MISSING (expected: ${relType})`);
            allExpectedFound = false;
        }
    });
});

console.log('\n' + '='.repeat(60));

if (allExpectedFound && duplicates.length === 0) {
    console.log('\n✅ All syntax checks passed!');
    process.exit(0);
} else {
    console.log('\n❌ Some syntax checks failed!');
    process.exit(1);
}
