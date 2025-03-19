import { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverage: true,
    setupFilesAfterEnv: ["<rootDir>/tests/setupTests.ts"],
};

export default config;