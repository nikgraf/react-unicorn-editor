// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/testHelper.js'],
  moduleFileExtensions: ['jsx', 'js'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleDirectories: ['node_modules', 'src'],
  testPathIgnorePatterns: ['./node_modules/'],
  collectCoverageFrom: [],
  coveragePathIgnorePatterns: ['.stories.tsx'],
  coverageThreshold: {
    global: {},
  },
};
