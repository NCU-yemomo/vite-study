import {defineConfig, loadEnv} from "vite"

import viteBaseConfig from "./vite.base.config" 
import viteDevConfig from "./vite.dev.config"
import viteProdConfig from "./vite.prod.config"

//defineConfig传入的command可以判断当前是开发环境还是生产环境
//command: "build" | "serve"

//使用策略模式，有时间可以看看设计模式那本书，挺有用
const envResolver={
    "build":()=>{
        console.log("生产环境")
        //两个都返回，base为基础配置，prod为生产环境配置
        return ({...viteBaseConfig,...viteProdConfig})
    },
    "serve":()=>{
        console.log("开发环境");
        return (Object.assign({},viteBaseConfig,viteDevConfig))
    }
}


//需要注意，vite的配置运行在node服务端
export default defineConfig(({command,mode})=>{
    // console.log("mode///",mode)//development
    //使用lodash定位环境变量文件
    // console.log("process.cwd()///",process.cwd)
    //prefixes表示读取的文件前缀，默认是读取env
    const env=loadEnv(mode,process.cwd(),"")
    // console.log("env////",env);
    // console.log("command",command);
    return envResolver[command]()
})