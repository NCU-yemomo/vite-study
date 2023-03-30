import { defineConfig } from "vite";

export default defineConfig({
    optimizeDeps:{
        include:["lodash-es","lodash"]
    },
    envPrefix:"YEMOMO_"//设定前缀，解除vite对变量的拦截。环境变量前面需要配置此前缀
})
