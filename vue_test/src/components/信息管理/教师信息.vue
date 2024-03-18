<template>

  <el-descriptions class="margin-top" title="教师个人信息" :column="3" :size="size" border>
    <template slot="extra">
      <el-button type="primary" size="small">修改</el-button>
    </template>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        用户名
      </template>
      <div v-if="username">
      {{username}}
      </div>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-work-num"></i>
        工号
      </template>
      {{worknum}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-college"></i>
        学院
      </template>
   
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-department"></i>
        系部
      </template>
     
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-profession"></i>
        专业
      </template>
     
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-title-post"></i>
        职称
      </template>
     
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-degree"></i>
        学位
      </template>
      
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-edu-bg"></i>
        学历
      </template>
    
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-telephone"></i>
        电话
      </template>
      
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-email"></i>
        邮箱
      </template>
      
    </el-descriptions-item>
    
  </el-descriptions>
</template>

<script>
import axios from 'axios'
  export default {
    name:"jiaoshixinxi",
    data(){
      return{
         username:null,
         worknum:'0'
      }
    },
    // computed:{
    //   usern: function(){
    //       axios.get("http://localhost:8080/test/3").then(
    //      response =>{'请求成功',
    //      this.username=response.data.data.name,
    //     //  this.worknum=response.data.data.college,
    //      console.log(response.data)},
     
    //      error=>{console.log('请求失败',error.message)}
    //    )
    //    return this.username
    //   }
    // },


  
   

    
mounted() {
  async function resstudent() {
    const {data: res} = await axios.get("http://localhost:8080/test/3");
    return res.data.name;
  }
  
  // 更新数据
  resstudent().then(username => {
    this.username = username;
  });
}
  }
 
</script>