module.exports = {
    "extends": "airbnb",
    parser: "babel-eslint",
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "no-nested-ternary": "error",
      "jsx-a11y/anchor-is-valid": ["error", {
        "components": ["a"],
        "specialLink": ["hrefLeft", "hrefRight"],
        "aspects": ["noHref", "invalidHref", "preferButton"]
      }],
      "linebreak-style": 0
    },
    "globals": {
      "document": true,
      "window": true,
      "describe": true,
      "it": true,
      "expect": true
    }
  };