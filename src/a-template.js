/* eslint-disable no-console */
// 为了测试babel是否起作用
// 用yarn run ex src/a-template.js运行，运行通过，打印出此文件的路径即为验证成功
const path = require("path");

const fn = function () {
  return path.resolve(__dirname);
};

module.exports = fn;
