import svg from "@assets/svg/fullScreen.svg?raw"
//vite在引入静态资源的时候，可以通过?带上参数来进行内容返回，默认是?url
const div = document.createElement("div")
div.innerHTML=svg
document.body.appendChild(div)
const svgTag=document.getElementsByTagName("svg")[0]
//通过row引入的svg本质上是svg标签，可以对svg进行修改，具体参照MDN文档
//https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute
svgTag.onclick=()=>{
    console.log("svg")
    //注意这里不能用this，因为this指向的是window,箭头函数没有this
    svgTag.style.fill   = "red"
}