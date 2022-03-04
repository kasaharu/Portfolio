module.exports = {
  globalSetup: 'jest-preset-angular/global-setup',
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
};
