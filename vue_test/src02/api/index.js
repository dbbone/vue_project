import requests from "./request";

export const req1= ()=>{
   return requests({     //axios 返回的是promise对象
        method:"GET",
        url:"http://www.weather.com.cn/data/sk/101010100.html"
    })
}