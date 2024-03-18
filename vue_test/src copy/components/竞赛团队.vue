<template>
       <el-table
    :data="DataSearch"
    height="400"
    border
    style="width: 100%">
    <el-table-column
      prop="login"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="html_url"
      label="来源"
      width="180">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope"> <!--加了scope后才能输入    -->
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
          <el-button @click="getdata">获取数据</el-button>
      </template>
      </el-table-column>
  </el-table>
</template>

<script>
  import axios from 'axios'
export default {
        name:'xuesheng',
       data() {
      return {
        users:[],
        search:'',
        tableData: [{
          xuehao: '01',
          name: '1',
          dianhua: '1'
        }, {
           xuehao: '00',
          name: '1',
          dianhua:'2'
        }, {
         xuehao: '00',
          name: '1',
          dianhua: '2'
        }, {
          xuehao: '00',
          name: '1',
        dianhua: '3'
        }, {
         xuehao: '00',
          name: '1',
          dianhua: '3'
        }, {
         xuehao: '00',
          name: '1',
          dianhua: '3'
        }, {
         xuehao: '00',
          name: '1',
          dianhua: '3'
        }]
      }
    },
    computed:{
      tableDataSearch() {    //筛选对象中的所有key value
      var input = this.search;  //username为input中的v-model参数
      if (input) {
        return this.tableData.filter((data) => {
          return Object.keys(data).some((key) => {
            return String(data[key]).toLowerCase().indexOf(input) > -1;
          });
        });
      }
      return this.tableData;
    },
         DataSearch() {    //筛选对象中的所有key value
      var input = this.search;  //username为input中的v-model参数
      if (input) {
        return this.users.filter((user) => {
          return Object.keys(user).some((key) => {
            return String(user[key]).toLowerCase().indexOf(input) > -1;
          });
        });
      }
      return this.users;
    },
  },
  methods:{
      async getdata(){
         const{data:res}= await axios({
          method:'GET',
          url:'https://api.github.com/search/users?q=test'
      });
      console.log(res)   //此时的res就是 返回响应报文中的data
        let i= res.items.length;
      console.log(i)
        for(let j=0;j<i;j++){
            this.users.unshift({'login':res.items[j].login,'html_url':res.items[j].html_url,'avatar_url':res.items[j].avatar_url})
  
        }
      },
       showdata(res){
        let i= res.items.size;
        for(let j=0;j<i;j++){
            this.users.unshift({login:res.items[j].login,html_url:res.items[j].html_url,avatar_url:res.items[j].avatar_url})
                
        }
  },
//  async beforeCreate() {
//          const{data:res}= await axios({
//           method:'GET',
//           url:'https://api.github.com/search/users?q=test'
//       });
//       console.log(res)   //此时的res就是 返回响应报文中的data
//         let i= res.items.length;
//       console.log(i)
//         for(let j=0;j<i;j++){
//             this.users.unshift({'login':res.items[j].login,'html_url':res.items[j].html_url,'avatar_url':res.items[j].avatar_url})
  
//         }
//       },
 }
}
  </script>
<style>

</style>