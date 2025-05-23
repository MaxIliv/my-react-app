import type {Config} from 'jest';

export default async (): Promise<Config> => {
  return {
    rootDir: '__tests__',
    verbose: true,
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['jest-extended/all'],
    transform: {
      "^.+\\.(ts|tsx|js|jsx)$": "ts-jest"
    }
  };
};