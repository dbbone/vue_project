<template>

   
   <div>
     <div>
     <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" style="background-color:#008784 ; height:100px" >
  <img src="../assets/校徽2.jpg" width="500px" height="70px" style="margin-top:10px">
   <!-- <div  id="ziti">
   <p id="ziti2">竞赛管理系统</p>
   </div> -->
  <el-button type="primary" icon="el-icon-user-solid" circle id="touxiang"></el-button>
    
  </el-menu>
     </div>
   
   <!-- 头部校徽栏 -->
     
    <el-menu 
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      id="daohang2">

  <el-menu-item index="1"  @click="jin5">主页面</el-menu-item>
  <!-- <el-submenu index="2">
    <template slot="title">个人中心</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu> -->
  <el-menu-item index="2" @click="jin6" >个人中心</el-menu-item>
  <el-menu-item index="3" >竞赛负责人</el-menu-item>
  

     <el-menu-item id="youce">
       退出
     </el-menu-item>
</el-menu>
 </div>              <!--到此处为头部导航栏 -->
</template>

<script>
export default {
     name:'dh',
     methods:{
       jin5(){                 //导航栏第二行 主页面按钮
         this.$router.push({
           name:'zhuye'
         })
       },
       jin6(){
        this.$router.push({
          name:'personalpage'
        })
       }
     }
}
</script>

<style scoped>
        #youce{
          float: right;
        }
        /* #zuoce{
          margin-top:10px;
        } */
        /* #tu{
          float: left;
        } */
        #touxiang{                 /* 用于右侧头像栏目居中   */
          float: right;
          margin-top: 30px;
          margin-right: 20px;
        }
        #daohang2 {            /*  保持第一行和第二行导航栏无间距   */
          margin-top: -0.5px;   
        }
        /* #ziti{         
          display: inline-block;
          font-family: "FangSong";
          font-size: 30px;
          color: aliceblue;
           height: 60px;
            vertical-align:middle
           
         } */
         /* #ziti2{
           height: 60px;
           line-height: 60px;
         } */
</style>