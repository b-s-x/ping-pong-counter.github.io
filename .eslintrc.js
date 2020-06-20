module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "rules": {
      "func-names": ["error", "never"],
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    }
};