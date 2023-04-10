import fs from "fs"
import path from "path";


//注意fs模块对文件的处理最好配上path一起运行
function getDir(dirArr,prefix) {
    const dirParseArr = []
    //对开始得到了文件列表进行处理，找出是文件夹的文件
    dirArr.forEach(dir => {
        //获取文件的状态，此处可以使用Sync，但是推荐使用异步，而非同步
        //使用异步让文件读取处于一个进程中，其他程序依旧运行
        const dirState = fs.statSync(path.resolve(__dirname, `../src/${dir}`))
        //根据文件的状态，来得到是否是文件的bool值
        const parseDir = dirState.isDirectory()
        if (parseDir) {
            dirParseArr.push({key: `${prefix}${dir}`, src: path.resolve(__dirname, `../src/${dir}`)})
        }
    })

    const alias = {}
    dirParseArr.forEach((obj) => {
        alias[obj.key] = obj.src
    })
    console.log(alias)
    return alias
}

export default ({name="@"}={})=>{
    return {
        //插件的一个hook钩子，会在配置生效前运行，接收两个参数，config，env，具体使用可以看官网
        //vite插件返回的对象会与原来的config进行合并
        config(config,{mode,command}){
            const dirArr = fs.readdirSync(path.resolve(__dirname,"../src"))
            const result =getDir(dirArr,name)
            return {
                resolve:{
                    alias:result
                }
            }
        }
    }
}