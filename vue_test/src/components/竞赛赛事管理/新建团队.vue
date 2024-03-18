<template>
 <div>

   
   <div style="border: 1px solid;border-color: #cfcfc4 ;width:600px;margin-top:20px ;margin-left:200px"> <!-- 包裹form表格的div  -->
    <div style="border-bottom: 1px solid #dbdbdb;height:60px;width:400px ;">
   <h1 style=" margin-top:40px;margin-left:20px; font-family:宋体 " >新建团队</h1>
    </div>
   
   <el-form ref="form" :model="form" label-width="120px"  style="margin-top:20px " >
     <el-form-item label="竞赛名称" class="it">
    <el-input v-model="form.竞赛项目"></el-input>
  </el-form-item>
  <el-form-item label="团队负责人" class="it">
    <el-input v-model="form.项目负责人"></el-input>
  </el-form-item>
   <el-form-item label="队伍名称" class="it">
    <el-input v-model="form.队伍名称"></el-input>
  </el-form-item>





  <!-- <el-form-item label="学生" class="it">
    <el-input  v-for="(p1,index) in form.参赛学生" :key="index"    v-model="form.参赛学生[index]" style="margin-top:10px"></el-input>
    <el-button @click="newstudent">新增学生</el-button>
  </el-form-item>
  <el-form-item label="老师" class="it">
    <el-input  v-for="(p,index) in form.指导老师" :key="index"    v-model="form.指导老师[index]" style="margin-top:10px"></el-input>
    <el-button @click="newteacher">新增老师</el-button>
  </el-form-item> -->

  
  <el-row>


  <el-col :span="4"  style="margin-left:-80px">
  <el-form-item  class="it">
    <el-row>
    <el-col :span="4">学生</el-col>
     <el-button @click="newstudent">新增学生</el-button>
    </el-row>
    <el-input  v-for="(p1,index) in form.参赛学生" :key="index"    v-model="form.参赛学生[index]" style="margin-top:2px;width:150px" placeholder="学生姓名"></el-input>
    
  </el-form-item>

   </el-col>

   
 <el-col :span="4" style="margin-left:80px">
  <el-form-item  class="it" >
  
  <el-row>

    <el-col :span="4">老师</el-col>
  <el-button @click="newteacher">新增老师</el-button>

  </el-row>
  
    <el-input  v-for="(p,index) in form.指导老师" :key="index"    v-model="form.指导老师[index]" style="margin-top:2px;width:150px" placeholder="教师姓名"></el-input>
    
  </el-form-item>


  </el-col>


 </el-row>

  





   <el-form-item>

     <!-- <el-button @click="submitnew">点击添加</el-button> -->
     <el-button  style="margin-left:300px"  type="primary" @click="submitnew" round>点击添加</el-button> 
   </el-form-item>
   </el-form>

     
   </div>    <!--包裹表格至此 -->



   <div style="margin-top:40px">          <!--学生资料表格 -->
    <h1>学生数据信息</h1>
   <el-table
    :data= "users.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
    height="400"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="学生姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="studentId"
      label="学生学号"
      width="180">
    </el-table-column>
      <el-table-column
      prop="college"
      label="学生学院"
      width="180">
    </el-table-column>
    <el-table-column
      prop="major"
      label="学生专业"
      width="180">
    </el-table-column>
      <el-table-column
      prop="classes"
      label="学生班级"
      width="180">
    </el-table-column>






    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope"> <!--加了scope后才能输入    -->
        <el-input
          v-model="search"
          size="mini"
          placeholder="请输入学生的姓名"/>
          <!-- <el-button @click="getdata">获取数据</el-button> 此行为获取github用户的数据 测试用 -->
          <el-button @click="getstudentdata">搜索</el-button>
      </template>
      </el-table-column>

  </el-table>


<!--分页相关代码 -->

<div class="block">
  <el-pagination
   :current-page="currentPage"
      :page-size="pageSize"
      layout="total, prev, pager, next, jumper"
      :total="users.length"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange">
  </el-pagination>
</div>





  <!-- <el-input v-model="searc" placeholder="输入要查询学生的姓名" style="width:200px"></el-input>
  <el-button @click="Test2">
    点击请求数据2
  </el-button> -->
   
  
   </div> 

   
   <!-- <form action="" method="post" class="basic-grey">
 
                 <h1>Contact Form
 
                          <span>Please fill all the texts in the fields.</span>
 
                 </h1>
 
                 <label>
 
                          <span>Themplate :</span>
 
                          <select id="template" name="themplate" onchange="changeStyle();">
 
                                   <option value="basic-grey">basic-grey</option>
 
                                   <option value="elegant-aero">elegant-aero</option>
 
                                   <option value="smart-green">smart-green</option>
 
                                   <option value="white-pink">white-pink</option>
 
                                   <option value="bootstrap-frm">bootstrap-frm</option>
 
                                   <option value="dark-matter">dark-matter</option>
 
                          </select>
 
                 </label>
 
                 <label>
 
                          <span>Your Name :</span>
 
                          <input id="name" type="text" name="name" placeholder="Your Full Name" />
 
                 </label>
 
                 <label>
 
                          <span>Your Email :</span>
 
                          <input id="email" type="email" name="email" placeholder="Valid Email Address" />
 
                 </label>
 
 
 
                 <label>
 
                          <span>Message :</span>
 
                          <textarea id="message" name="message" placeholder="Your Message to Us"></textarea>
 
                 </label>
 
                 <label>
 
                          <span>Subject :</span><select name="selection">
 
                                   <option value="Job Inquiry">Job Inquiry</option>
 
                                   <option value="General Question">General Question</option>
 
                          </select>
 
                 </label>
 
                 <label>
 
                          <span>&nbsp;</span>
 
                          <input type="button" class="button" value="Send" />
 
                 </label>
 
         </form> -->

   

 </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'newteam',
    data(){
        return {
            users:[],
            
            form:{
              竞赛项目:'',
              项目负责人:'',
              指导老师:[],
              参赛学生:[],
              队伍名称:''
            },


       //下方是学生老师的select
       options: [{
          value: '1',
          label: '1'
        }, {
          value: '2',
          label: '2'
        }, {
          value: '3',
          label: '3'
        }, {
          value: '4',
          label: '4'
        }, {
          value: '5',
          label: '5'
        }],
        value: '',
        value2:'',

            search:'',
            searc:'',

             //下方是分页显示相关代码
            currentPage: 1, // 当前页码
            pageSize: 5, // 每页显示数量
            total: 100, // 总记录数
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

   


     //此处为表格筛选功能 可在 表格中用:data="DataSearch" 返回筛选的数据
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
     
     //分页代码
     handleCurrentChange (currentPage) {
       this.currentPage=currentPage;
     },
     handleSizeChange (size) {
        console.log(size,'size');
      this.pageSize = size;
      console.log(this.pageSize); //每页下拉显示数据
    },




      
      async getdata(){
         const{data:res}= await axios({
          method:'GET',
          url:'https://api.github.com/search/users?q=test',
      });
      console.log(res)   //此时的res就是 返回响应报文中的data
        let i= res.items.length;
      console.log(i)
        for(let j=0;j<i;j++){
            this.users.push({'login':res.items[j].login,'html_url':res.items[j].html_url,'avatar_url':res.items[j].avatar_url})  
            //为什么不直接 push({res.items[j]}) 因为其他数据是不需要的 只需要指定数据
            // this.users.push(res.items[j])
  
        }
      },

  //      showdata(res){
  //       let i= res.items.size;
  //       for(let j=0;j<i;j++){
  //           this.users.unshift({login:res.items[j].login,html_url:res.items[j].html_url,avatar_url:res.items[j].avatar_url})
                
  //       }
  // },

  //下方为获取学生数据方法
  async getstudentdata(){
         const{data:res}= await axios({
          method:'GET',
          url:`http://localhost/student/name/${this.search}` 
             });
      console.log(res)   //此时的res就是 返回响应报文中的data
      let i= res.data.length;
      this.users=[];
        for(let j=0;j<i;j++){
            this.users.push({'name':res.data[j].name,'studentId':res.data[j].studentId,'classes':res.data[j].classes,
            'major':res.data[j].major,'college':res.data[j].college,
            });
           
  
        }
      },
 // this.users = d ;
            // this.users.unshift({'login':res.items[j].login,'html_url':res.items[j].html_url,'avatar_url':res.items[j].avatar_url})  
            //为什么不直接 push({res.items[j]}) 因为其他数据是不需要的 只需要指定数据
            // this.users.push(res.items[j])



        

    async resstudent(){
         const{data:res}= await axios({
          method:'GET',
          url:"http://localhost/student/1",
          headers: {  'user-agent': 'Apifox/1.0.0 (https://www.apifox.cn)' ,'Accepet':'*/*','Accept-Encoding':'gzip,deflate'},
      });
      console.log(res.name)
 
    },

    Test(){   //此处调用了代理服务器 所以域名为localhost:8080  "`我的团队${index}`" chatgpt是真nb 
       axios.get(`http://localhost:8080/test/${this.searc}`).then(
         response =>{'请求成功',console.log(response.data)},
         error=>{console.log('请求失败',error.message)}
       )
      
    },

    
       Test2(){     //若不采用代理服务器则会发生跨域问题 
       axios.get('http://localhost/competition?current=1&limit=2&key=创新&year=2023').then(
         response =>{'请求成功',console.log(response.data)},
         error=>{console.log('请求失败',error.message)}
       )

      
    },
  
//路由方法
  newteacher(){
    this.form.指导老师.push('')    //另一种方法 还没试 直接用students.length computed计算
  },

  newstudent(){
    this.form.参赛学生.push('')
  },
  
  submitnew(){
    this.$store.state.myteams.push(this.form);

           

    
     this.$alert('团队新建成功 请前往我的团队查看', '新建成功', {
          confirmButtonText: '确定',
          // callback: action => {
          //   this.$message({
          //     type: 'info',
          //     message: `action: ${ action }`
          //   });
          // }
        });
  }
  

    }
}
</script>

<style scoped>
    .it{
      width: 400px;
      margin-left:60px;
      font-weight: bold;
    }
    .block{
      margin-left:450px;
    }






    .basic-grey {
 
    margin-left:auto;
 
         margin-right:auto;
 
         max-width: 500px;
 
         background: #F7F7F7;
 
         padding: 25px 15px 25px 10px;
 
         font: 12px Georgia, "Times New Roman", Times, serif;
 
         color: #888;
 
         text-shadow: 1px 1px 1px #FFF;
 
         border:1px solid #E4E4E4;
 
}
 
.basic-grey h1 {
 
         font-size: 25px;
 
         padding: 0px 0px 10px 40px;
 
         display: block;
 
         border-bottom:1px solid #E4E4E4;
 
         margin: -10px -15px 30px -10px;;
 
         color: #888;
 
}
 
.basic-grey h1>span {
 
         display: block;
 
         font-size: 11px;
 
}
 
.basic-grey label {
 
         display: block;
 
         margin: 0px;
 
}
 
.basic-grey label>span {
 
         float: left;
 
         width: 20%;
 
         text-align: right;
 
         padding-right: 10px;
 
         margin-top: 10px;
 
         color: #888;
 
}
 
.basic-grey input[type="text"], .basic-grey input[type="email"], .basic-grey textarea, .basic-grey select {
 
         border: 1px solid #DADADA;
 
         color: #888;
 
         height: 30px;
 
         margin-bottom: 16px;
 
         margin-right: 6px;
 
         margin-top: 2px;
 
         outline: 0 none;
 
         padding: 3px 3px 3px 5px;
 
         width: 70%;
 
         font-size: 12px;
 
         line-height:15px;
 
         box-shadow: inset 0px 1px 4px #ECECEC;
 
         -moz-box-shadow: inset 0px 1px 4px #ECECEC;
 
         -webkit-box-shadow: inset 0px 1px 4px #ECECEC;
 
}
 
.basic-grey textarea{
 
         padding: 5px 3px 3px 5px;
 
}
 
.basic-grey select {
 
         
 
         appearance:none;
 
         -webkit-appearance:none;
 
         -moz-appearance: none;
 
         text-indent: 0.01px;
 
         text-overflow: '';
 
         width: 70%;
 
         height: 35px;
 
         line-height: 25px;
 
}
 
.basic-grey textarea{
 
         height:100px;
 
}
 
.basic-grey .button {
 
         background: #E27575;
 
         border: none;
 
         padding: 10px 25px 10px 25px;
 
         color: #FFF;
 
         box-shadow: 1px 1px 5px #B6B6B6;
 
         border-radius: 3px;
 
         text-shadow: 1px 1px 1px #9E3F3F;
 
         cursor: pointer;
 
}
 
.basic-grey .button:hover {
 
         background: #CF7A7A
 
}
</style>