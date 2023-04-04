import { defineConfig } from "vite";
import postcssPresetEnv from "postcss-preset-env"
export default defineConfig({
    optimizeDeps:{
        include:["lodash-es","lodash"]
    },
    envPrefix:"YEMOMO_",//设定前缀，解除vite对变量的拦截。环境变量前面需要配置此前缀
    css:{
        modules:{
            localsConvention:"dashes",//设置为驼峰式命名，css代码中module的footer-content属性变成了footerContent属性，only表示对象其属性只有驼峰式命名
            scopeBehaviour:"local",
            // generateScopedName:(name,filename,css)=>{
            //     console.log("name",name,"filename",filename,"css",css)
            //     const str = filename.split("/")
            //     //如此命名产生的是cs-css模块前缀+类名，有一定阅读性！！并且可以尽量避免重复，因为cssModule前缀基本不同
            //     return `cs-${str[str.length-1].split(".")[0]}-${name}`
            //
            // },
            //根据传入的字符串，让hash值更加复杂，一般没啥用
            hashPrefix:"hello",
            // globalModulePaths:["./componentA.module.css"]
        },
        preprocessorOptions:{//css预处理设置，包括less ，sass ， style
            less:{
                math:"always",//保证所有数学表达式均可运行，即不再根据括号进行
                globalVars:{
                    mainColor:"red",
                    silkColor:"cornsilk"//设置全局变量
                },
                //开发环境下，是否显示对应文件的位置，例如标签的css  style显示在css文件路径
                //有助于标注文件中报错准确位置

            }
        },
        devSourcemap:true,
        //vite支持直接在配置文件中配置postcss,具体的其他配置可以看官方文档
        postcss:{
            plugins:[postcssPresetEnv]
        }
    }
})
