<template>
<div>


<el-container>


   <el-header style="background-color:#008784;height: 100px;">
      <img src="../assets/校徽.png" alt="" style="height: 100px;margin-left: -20px;">
   </el-header>

   
   <el-main style="height: 650px" >    <!-- 该处实现切换用户登录页面  主要通过  -->
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1" @click="studentlogin" >普通学生登录</el-menu-item>
          <el-menu-item index="2" @click="Administratorslogin">管理员登陆</el-menu-item>
        </el-menu>
       

       <!-- 此处为学生输入密码账号的部分界面 --> 



        <div style="margin-top: 10px;" v-if="studentshow"    >
        <el-form-item label="学号" prop="pass" class="fitem">
          <el-input  v-model="zhanghao" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="一卡通密码"  prop="checkPass" class="fitem">
          <el-input type="password" v-model="mima" autocomplete="off"></el-input>
        </el-form-item>
        
        <el-form-item v-if="ero">
          此处为登录失败的提示
          显示在登录页面上
        </el-form-item>


        <el-form-item>
          <el-button type="primary" @click="deng2"  >登录</el-button>
          <el-button type="primary" style="margin-left: 30px;" >忘记密码</el-button>
        </el-form-item>
       </div>

      <!--此处为管理员输入 --> 
          <div style="margin-top: 10px;" v-if="guanliyuanshow"    >
        <el-form-item label="管理员工号" prop="pass" class="fitem">
          <el-input  v-model="zhanghao" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码"  prop="checkPass" class="fitem">
          <el-input type="password" v-model="mima" autocomplete="off"></el-input>
        </el-form-item>
        
        <el-form-item v-if="ero">
          此处为登录失败的提示
          显示在登录页面上
        </el-form-item>


        <el-form-item>
          <el-button type="primary" @click="deng"  >登录</el-button>
          <el-button type="primary" style="margin-left: 30px;" >忘记密码</el-button>
        </el-form-item>
       </div>

       <!--此处为管理员输入结束 --> 



  </el-form>
</el-main>


    <el-footer style="background-color:#008784;height: 100px;">
     <div style="text-align: center;">
       <el-link type="primary" class="linkclass">学校首页</el-link>
       <el-link type="primary"class="linkclass">浙科邮箱</el-link>
       <el-link type="primary" class="linkclass">服务大厅</el-link>
     </div>
    </el-footer>


</el-container>
</div>
      
</template>
<script>
import axios from 'axios'
  export default {
    name:'loginpage',
      data() {
                   return {
                       name:'he',
                       zhanghao:'',
                       mima:'',
                       ruleForm:{},
                       rules:{},



                       //下方用户登录错误信息相关代码
                       ero:false,
                       //登陆切换
                       studentshow:true,
                       guanliyuanshow:false, 
                
                   }
               },
        methods: {
                 
                   jianyan(){
                     sessionStorage.setItem("token",true)
                     window.location.href="http://localhost:8080/#"  
                   },
                   studentlogin(){   //学生密码登录
                    this.guanliyuanshow = false;
                    this.studentshow  = true;
                   },

            
                   Administratorslogin(){   //管理员登陆
                    this.studentshow  = false;
                    this.guanliyuanshow = true;
                   },

                   denglu(){
                    var config = {
                        method: 'get',
                        url: `http://localhost/login?username=${this.zhanghao}&password=${CryptoJS.MD5(this.mima).toString()}`,
                        headers: { 
                            'Cookie': 'dcims_login_token=C052BACE-486B-6150-B1A2-531E922AEF17', 
                            'User-Agent': 'Apifox/1.0.0 (https://www.apifox.cn)'
                        }
                      };

                      axios(config)
                      .then(function (response) {
                        console.log("登陆成功");
                        window.location.href="http://localhost:8080/#" ;
                      })
                      .catch(function (error) {
                        console.log("登陆失败");
                        this.ero=true
                        console.log(this.ero)
                      });
                   },

                   deng(){
                    // window.location.href="http://localhost:8080/#"  
                    this.$router.push({
                    
                      
                  
                    })

                   },
                    deng2(){
                    // window.location.href="http://localhost:8080/#"  
                    this.$router.push({
                      name:'studentpage'
                    })

                   },

               },
  }
</script>
<style scoped >
  *{
          margin: 0;
          padding: 0;
        }
       .demo-ruleForm{
         /* padding-top: 50px;       */
        height: 300px;
        width: 400px;
        margin-top: 150px;
        margin-left: 900px;
        border: solid ;
        border-radius: 15px;
        background-color: white;
     }
      .fitem{
        /* padding-top: 10px; */
        width: 300px;
      }
      .el-menu-demo{
        margin-left: 80px;
        width: 300px;
        
      }
      .el-main{
        background-image: url('../assets/背景图.jpg');
        background-repeat: no-repeat;
        background-size: cover;
  /* 设置背景图片的尺寸，这里假设是cover，可以根据需要调整 */
  
      }
      .linkclass{
        margin-left: 50px;       /* margin-left: 50px; 用于改变下方网址的间距    */
      }
</style>