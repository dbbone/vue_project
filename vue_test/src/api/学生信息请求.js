import axios from "axios"

const getstudent = axios.create({  //创建了一个axios实例 进行了默认配置
    // baseURL:"/api",
    // timeout:5000
});
getstudent.interceptors.request.use((config)=>{
    return config
});
getstudent.interceptors.response.use((res)=>{
    return res.data
},(err)=>{
    return Promise.reject(new Error('faile'));
})
export default getstudent;