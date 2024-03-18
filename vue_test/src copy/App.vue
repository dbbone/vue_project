<template>
    <div>
      <!-- <denglu></denglu>   登录组件展示 -->

   
    <!-- <el-container v-show="$store.state.isshow"> 主页面展示 -->
    
      <!-- <el-header style="padding:0"> -->
      <dh></dh>
              
      <!--到此处为头部导航栏 -->
  <!-- </el-header> -->
             <!--左侧导航栏+主体页面 原先加了 el-container -->  
     
      <mainaside></mainaside>
  
     <!--结束 原先加了 el-container-->

  
<!-- </el-container>            -->
</div>
</template>

<script> 
 import  denglu  from './components/登录.vue'
 import dh from './components/头部导航栏.vue'
 import mainaside from './components/mainaside.vue'
  
export default {
  name: 'App',         //之后要把上面的代码拆分成各个小的组件 方便管理代码
     data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
      };
    },
    components:{denglu,dh,mainaside},
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      // jin1(){
      //    this.$router.push({
      //      path:'LiXiang'
      //    })
      // },
      // jin2(){
      //    this.$router.push({
      //      name:'SaiShi'
      //    })
      // },
    },
    
    // beforeCreate(){
    //  if(!sessionStorage.getItem("token"))
    //  window.location.href="http://127.0.0.1:5500/%E7%99%BB%E5%BD%95.html"
    // }
}
</script>
<style >
</style>