module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx,mjs}"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"],
  setupFiles: ["jest-canvas-mock"],
  setupTestFrameworkScriptFile: "<rootDir>/test/setupTests.js",
  transform: {
    "^.+\\.(js|jsx|mjs)$": "babel-jest"
  },
  coverageDirectory: "./coverage/",
  collectCoverage: true
};