const nodeModulesToIgnoreTransform = [
]

module.exports = {
  clearMocks: true,

  globals: {
    window: {}
  },

  preset: "ts-jest",

  moduleDirectories: [
    'node_modules'
  ],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node', 'd.ts'],

  moduleNameMapper: {
    "^@ttrpg-data/(.*)$": "<rootDir>/src/main/ts/$1",
  },

  transform: {
    "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest"
  },

  testEnvironment: 'node',

  testMatch: [
    '**/*.test.ts?(x)',
  ],

  testPathIgnorePatterns: [
    '/node_modules/',
  ],

  transformIgnorePatterns: [
    'node_modules/(?!('+ nodeModulesToIgnoreTransform.join('|')+'))'
  ],
};