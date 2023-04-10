import mockjs from "mockjs";
const userData=mockjs.mock({
    "data|10":[{
        name:"@cname",
        age:18,
        date:"@date",
        time:"@time"
    }]
})
module.exports =  [
    {
        method:"get",
        url:"/api/userlist",
        response:()=>{
            return {
                code: 200,
                message: "success",
                data:userData
            }
        }
    }
]