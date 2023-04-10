export default (option)=>{
    return {
        transformIndexHtml:{
            enforce:"pre",
            transform:(html,ctx)=>{
                // console.log("html",html)
                // console.log("ctx",ctx)
                return html.replace(/<%= title %>/g,option.inject.data.title)
            }
        }
    }

}