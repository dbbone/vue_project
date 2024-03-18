<template>
        <ul class="todo-main">
         <my-item v-for="p in persons" :key="p.id" :person='p'/>
        </ul>
</template>

<script>
   import MyItem from './MyItem.vue'
export default {
  name:'MyList',
  // data(){
  //   return {
  //    persons:this.$store.state.persons2
  //   }
  // },
  computed:{
    persons(){
    return this.$store.state.persons2
    }
  },
/*   methods:{
 /*    tianjia2(obj){
      this.persons.unshift(obj)
    },
    deletethis2(id){
       this.persons=this.persons.filter((obj)=>{
         return obj.id!=id
       })
    },
    tongjidone(){
       var i=0
       const i2=this.persons
       for(let i1=0;i1<i2.length;i1++){
         if(i2[i1].done===true){
           i+=1
         }
       }
       return i
    } 
      }, 
/*   mounted(){
  this.$bus.$on("tj",this.tianjia2)
  this.$bus.$on("sc",this.deletethis2)
  },
  updated(){
    this.$bus.$emit("tongji",this.tongjidone())
    console.log(this.tongjidone())
  }, */
  components:{MyItem}
}
</script>

<style>
/*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>