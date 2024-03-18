<template>
    <div>

       <dh></dh>
              
 
     
      <mainaside></mainaside>

    
  

</div>
</template>

<script> 

 import dh from '../components/头部导航栏.vue'
 import mainaside from '../components/mainaside.vue'
  
export default {
  name: 'adminpage',         //之后要把上面的代码拆分成各个小的组件 方便管理代码
     data() {
      return {
     
      };
    },
    components:{dh,mainaside},
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