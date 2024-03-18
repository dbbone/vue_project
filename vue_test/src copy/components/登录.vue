<template>
<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm" v-show="$store.state.isshow">
      <el-form-item label="账号" prop="pass" class="fitem">
        <el-input type="password" v-model="zhanghao" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码"  prop="checkPass" class="fitem">
        <el-input type="password" v-model="mima" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="tijiao" >提交</el-button>
      </el-form-item>
</el-form>
</template>
<script>
import axios from 'axios'
  export default {
    name:'denglu',
    data() {
       return {
         mima:'',
         zhanghao:'',
       }
      },
      methods: {
        tijiao(){
          // axios({
          //    url:'http://localhost:8080/atguigu/101010100.html',
          //    methods:GET,
          // }).then(res=>{localStorage.setItem('token',res.data.token),
          // console.log(res.data),
          // this.$store.state.isshow=!this.$store.state.isshow},(error)=>{return error})
          // },
            this.$store.state.isshow=!this.$store.state.isshow  
        }
      }
  }
</script>
<style scoped >
   .demo-ruleForm{
      margin-top: 200px;
      margin-left: 400px;
   }
    .fitem{
      width: 500px;
    }
</style>