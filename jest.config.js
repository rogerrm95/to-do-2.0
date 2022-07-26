module.exports = {
    verbose: true,
    testPathIgnorePatterns: ["/node_modules/"],
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(jsx|js|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/tests/__mock__/fileMock.js',
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/src/tests/jest.setup.ts'],
    modulePathIgnorePatterns: ["<rootDir>/node_modules/react-icons"]
}