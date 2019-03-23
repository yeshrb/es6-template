module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true
  },
  extends: "airbnb-base",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  rules: {},
  settings: {
    "import/resolver": {
      "babel-module": {
        root: ["./"],
        alias: {
          "S": "./src",
          "T": "./test"
        }
      }
    }

    
  }

}
;
