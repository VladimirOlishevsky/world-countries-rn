module.exports = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)"
  ],
  testEnvironment: 'jsdom',
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "json",
    "jsx",
    "node"
  ],
  moduleNameMapper: {
    '^store/(.*)': '<rootDir>/src/store/$1',
    '^components/(.*)': '<rootDir>/src/components/$1',
    '^common/(.*)': '<rootDir>/src/common/$1',
    '^hooks/(.*)': '<rootDir>/src/hooks/$1',
    '^materialUI/(.*)': '<rootDir>/src/materialUI/$1',
    '^utils/(.*)': '<rootDir>/src/utils/$1',
    '^constants/(.*)': '<rootDir>/src/constants/$1',
    '^providers/(.*)': '<rootDir>/src/providers/$1',
    "\\.(css|scss)$": "identity-obj-proxy",
    '\\.(svg|png|jpg|jpeg|gif)$': '<rootDir>/fileMock.ts',
  },
  transform: {
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
  },
  setupFiles: [
    "./node_modules/react-native-gesture-handler/jestSetup.js",
    '<rootDir>/jest/global.ts',
    '<rootDir>/jest/setup.ts',
    // 'jest-localstorage-mock',
    // 'jest-date-mock',
  ],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test|snap).[jt]s?(x)',],
  reporters: ['default', 'jest-junit'],
  modulePathIgnorePatterns: ['__stories__'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!**/node_modules/**', '!src/**/*.d.ts', '!**/__stories__/**', '!**/__fixtures__/**'],
  coverageReporters: ['text', ['lcov', { 'src': '../../' }], 'cobertura'],
  coverageThreshold: {
    global: {
      statements: 95,
      branches: 88,
      functions: 90,
      lines: 95,
    }
  }
};
