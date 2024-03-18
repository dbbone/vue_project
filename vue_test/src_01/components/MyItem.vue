.<template>
          
          <li>
            <label>
              <input type="checkbox" :checked="person.done" @click="gou"/>
              <span>{{person.name+" "}}{{person.done}}</span>
            </label>
            <button class="btn btn-danger" @click="deletethis(person.id)">删除</button>
          </li>
</template>

<script>
export default {
    name:'MyItem',
    props:['person'],
    methods: {
      gou(){
        var x = this.person
        x.done= !x.done
      },
      // deletethis(id){
      //   this.$store.state.persons2=this.$store.state.persons2.filter((obj)=>{
      //     return obj.id!==id
      //   })
      // }
       deletethis(id){
        //  this.$store.commit("SHAN",id)
        this.$store.state.persons2=this.$store.state.persons2.filter((obj1)=>{
             return obj1.id!=id
         })
       }
    },

}
</script>

<style>
/*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

</style>