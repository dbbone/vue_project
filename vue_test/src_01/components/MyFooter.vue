.<template>
          <div class="todo-footer">
          <label>
            <input type="checkbox"/>
          </label>
          <span>
            <span>已完成{{gouxuan}}</span> / 全部{{quanbu}}
          </span>
          <button class="btn btn-danger">清除已完成任务</button>
        </div>
</template>
<script>
export default {
   name:'MyFooter',
   data(){
     return {
         quanbu:this.$store.state.persons2.length
     }
   },
   computed:{
    //  quanbu(){   用computed 就能数据更新页面也更新
    //    return this.$store.state.persons2.length
    //  },
         gouxuan(){
        let i=0
        for(var h=0;h<this.$store.state.persons2.length;h++){
          console.log(this.$store.state.persons2[h].done)
          if(this.$store.state.persons2[h].done===true){
            i+=1;
          }
        }
        console.log(h);
        return i ; 
     }
   },
}
</script>

<style>
 /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>