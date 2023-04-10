//vite编译天生就支持一些静态资源的导入,除此以外，json会被转化为js导入，因此可以进行解构取值
import png from "@assets/img/sylas.png"
import {name,token} from "./assets/json/index.json"
console.log(png)
console.log(name,token)//yemomo asjhndalksdhnjlaksjdmklasd
const img = document.createElement("img")
img.src=png
document.body.appendChild(img)
