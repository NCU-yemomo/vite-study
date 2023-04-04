import componentACss from "./componentA.module.css"


//vite会将css或者module.css或者module.less的样式插入html文件中，然后将原来的css代码改成js代码(此处会使用Content-type="text/javascript")
//建议看看浏览器网络文件编写的文件情况
const div = document.createElement("div")

div.className=componentACss.footer

document.body.appendChild(div)

console.log(componentACss)