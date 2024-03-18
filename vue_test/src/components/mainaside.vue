<template>
  <el-container>
  <el-aside width="200px" id="ASD">

    <el-menu :default-openeds="['1','2','3','4']">

      <!-- 教师信息  -->
      <!-- <el-submenu index="1">            
        <template slot="title"><i class="el-icon-message"></i>信息管理</template>
          <el-menu-item index="1-2" @click="jin4">教师信息</el-menu-item>
      </el-submenu> -->

     
     <!-- 赛事信息管理  -->
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>学校赛事管理</template>
        
         
          <el-menu-item index="1-1" @click="jin1">赛事立项</el-menu-item>  
           <el-menu-item index="1-2" @click="jin2">赛事信息</el-menu-item>
          <el-menu-item index="1-4" @click="jin3">赛事团队</el-menu-item>
       
      </el-submenu>
        
      <!-- 获奖信息  -->
      <el-submenu index="2"> <template slot="title"><i class="el-icon-menu"></i>获奖信息</template>
        
         
          <el-menu-item index="2-5" @click="jin11" >获奖信息</el-menu-item>  
           <el-menu-item index="2-6" @click="jin12">获奖申报</el-menu-item>
        
      </el-submenu>


     <!-- 获奖分配  -->
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>获奖分配</template>
       
          <el-menu-item index="3-1" @click="jin6">奖金分配</el-menu-item>   
          <el-menu-item index="3-2" @click="jin5">工作量分配</el-menu-item>

      </el-submenu>


    <!-- 申请审核  -->
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-setting"></i>申请审核</template>
          
          <el-menu-item index="3-5" @click="jin10" >立项审核</el-menu-item> 
          <el-menu-item index="3-1" @click="jin7">获奖审核</el-menu-item>   
          <el-menu-item index="3-2" @click="jin8">奖金审核</el-menu-item>
          <el-menu-item index="3-3" @click="jin9">工作量审核</el-menu-item>

      </el-submenu>

    </el-menu>
   </el-aside>

    <!-- 路由展示区域  -->
    <el-main  style="margin-top:-10px"><router-view></router-view></el-main>       


  </el-container>
</template>

<script>
export default {
    name:'mainaside',
    methods:{
        jin1(){                //赛事立项
         this.$router.push({
           path:'LiXiang'
         })
      },
      jin2(){                  //赛事信息
         this.$router.push({
           name:'SaiShi'
         })
      },
      jin3(){                  //赛事团队
         this.$router.push({
           name:'tuandui'
         })
      },
      jin4(){                  //教师信息
         this.$router.push({
           name:'jiaoshixinxi'
         })
      },
       jin5(){                  //工作量分配
         this.$router.push({
          name: "gongZuoLiangFenPei",
         })
      },
        jin6(){                  //奖金分配
         this.$router.push({
          name: "jiangJinFenPei",
         })
      },
        jin7(){                  //获奖审核
         this.$router.push({
          name: "huoJiangShenHe",
         })
      },
         jin8(){                  //奖金审核
         this.$router.push({
          name: "jiangjinShenHe"
         })
      },
        jin9(){                  //工作量审核
         this.$router.push({
          name: "gongZuoLiangShenHe",
         })
      },
        jin10(){                  //立项审核
         this.$router.push({
          name: "liXiangShenHe",
         })
      },
        jin11(){                  //获奖信息
         this.$router.push({
          name: "huojiangxinxi",
         })
      },
         jin12(){                  //获奖申报
         this.$router.push({
          name: "huojiangshenbao",
         })
      },
    }
}
</script>

<style>
  
</style>