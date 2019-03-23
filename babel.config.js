const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
        node: "current"
      },
      useBuiltIns: "usage"
    }
  ]
];
const plugins = [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "S": "./src",
          "T": "./test"
        }
      }
    ]
  ];
module.exports = { presets,plugins };
