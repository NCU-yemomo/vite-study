# vite 配置文件处理细节

1. vite配置文件的语法提示
   1. 如果你使用的是webstorm, 那你可以得到很好的语法补全
   2. 如果你使用是vscode或者其他的编辑器, 则需要做一些特殊处理
```js
//特殊处理方法一
//智能提示方法一：
import { defineConfig } from 'vite'
//defineConfig使用的是ts语法，其内部进行了类型标注，可以做到语法提示（可以自己看看此函数的类型)
// defineConfig(config: UserConfigExport): UserConfigExport
export default defineConfig({
    //optimizeDeps是vite的一个配置项，用于优化依赖项
    optimizeDeps: {
        include:['lodash-es']
        //exclude':['lodash-es'] 此代码会解除lodash的预构建
    },
    root:{

    }
    }
 )
```  


```js
//方法二
//此处使用了jsdoc语法，标注了viteConfig的类型为vite的UserConfig类型来做到语法提示
/** @type import("vite").UserConfig */
const viteConfig={
    optimizeDeps:{
        include:[]
    },
    root:{}
}
export default viteConfig
```
2. 关于环境的处理
   过去我们使用webpack的时候, 我们要区分配置文件的一个环境
   - webpack.dev.config
   - webpack.prod.config
   - webpack.base.config
   - webpackmerge
   