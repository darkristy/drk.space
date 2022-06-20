module.exports = {
  extends: ["@darkristy"],
  rules: {
    "@typescript-eslint/no-shadow": ["error", { allow: ["task"] }],
    "react/react-in-jsx-scope": "off",
    "node/file-extension-in-import": "off",
    "node/no-unpublished-import": "off",
    "node/no-unpublished-require": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
};
