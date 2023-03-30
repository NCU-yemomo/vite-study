import { defineConfig } from "vite";

export default defineConfig({
    optimizeDeps:{
        include:["lodash-es","lodash"]
    },
    envPrefix:"YEMOMO_"//设置好对应前缀，解除vite拦截
})
