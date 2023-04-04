import componentBCss from "./componentB.module.less"

//组件本身就是通过原生js来进行渲染的，react会将写的react代码转化成js

const div = document.createElement("div")

div.className=componentBCss.footer
document.body.appendChild(div)