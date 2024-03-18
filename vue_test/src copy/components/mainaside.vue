<template>
  <el-container>
  <el-aside width="200px" id="ASD">

    <el-menu :default-openeds="['1','2','3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>信息管理</template>
          <el-menu-item index="1-2">教师信息</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>学校赛事管理</template>
        <el-menu-item-group>
          <template slot="title">赛事信息管理</template>
          <el-menu-item index="2-1" @click="jin1">赛事立项</el-menu-item>  
           <el-menu-item index="2-2" @click="jin2">赛事信息</el-menu-item>
          <el-menu-item index="2-4" @click="jin3">赛事团队</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">获奖信息</template>
          <el-menu-item index="2-5" @click="jin1">获奖信息</el-menu-item>  
           <el-menu-item index="2-6" @click="jin4">获奖申报</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>获奖分配</template>
       
          <el-menu-item index="3-1" >奖金分配</el-menu-item>   
          <el-menu-item index="3-2">工时分配</el-menu-item>

      </el-submenu>

    </el-menu>
    </el-aside>
    <el-main id="ASM"><router-view></router-view></el-main> 
  </el-container>
</template>

<script>
export default {
    name:'mainaside',
    methods:{
        jin1(){                //立项
         this.$router.push({
           path:'LiXiang'
         })
      },
      jin2(){                  //赛事信息
         this.$router.push({
           name:'SaiShi'
         })
      },
      jin3(){                  //学生信息
         this.$router.push({
           name:'xuesheng'
         })
      },
      jin4(){                  //新增获奖信息
         this.$router.push({
           name:'shangchuan'
         })
      },
    }
}
</script>

<style>
     /* #ASD{
       margin-top: 65px;
     }
     #ASM{
       margin-top: 60px;
     } */
</style>