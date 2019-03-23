//为了测试babel是否起作用
//用yarn run ex src/a-template.js运行，运行通过，打印出此文件的路径即为验证成功
import fs from 'path';
const fn = ()=>{
  console.log(fs.resolve(__dirname,__filename));
};
export default fn;
