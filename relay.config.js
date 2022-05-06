module.exports = {
  src: "./",
  artifactDirectory: "__generated__",
  schema: "./data/schema.graphql",
  exclude: [
    "**/node_modules/**",
    "**/.next/**",
    "**/__mocks__/**",
    "**/__generated__/**",
  ],
  language: "typescript",
};
