//本文件模拟ajax请求
// const postUserName=()=>{
//     axios.post({
//         param:import.meta.env
//     })
// }


const printENV=()=>{
    console.log("env",import.meta.env)
    //反馈了对应的YEMOMO前缀变量，注意此时node服务端的环境变量获取也发生了改变
}

export default printENV