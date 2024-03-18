import axios from "axios"

const requests = axios.create({  //创建了一个axios实例 进行了默认配置
    baseURL:"/api",
    timeout:5000
});
requests.interceptors.request.use((config)=>{
    return config
});
requests.interceptors.response.use((res)=>{
    return res.data
},(err)=>{
    return Promise.reject(new Error('faile'));
})
export default requests;