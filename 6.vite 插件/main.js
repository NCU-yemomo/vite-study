import "./src/componentJs.js"
import "./src/componentSvg.js"

fetch("/api/userlist",{
    method:"get"
}).then(data=>{
    console.log(data)
})