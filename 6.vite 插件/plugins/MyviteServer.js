import path from "path";
import fs from "fs";
import data from "../mock/index.js"

export default (option)=> {
    return {
        configureServer(server) {
            //在服务端读出mock文件夹数据
            function getMockData() {
                const dirStat = fs.statSync("mock")
                if (dirStat.isDirectory) {
                    console.log("inner")
                    console.log("data", data)
                    return data
                }else{
                    return []
                }
                }
                server.middlewares.use((req, res, next) => {
                    const data=getMockData()
                    console.log("url",req.url)
                    console.log("data",data)
                    const state = data.find((mockData)=> mockData.url===req.url)
                    if (state) {
                        const obj = state.response(req)
                        console.log("obj",obj)
                        res.setHeader("Content-Type", "application/json");
                        res.end(JSON.stringify(obj));
                    }else{
                        next()
                    }

                })
            }
        }
}