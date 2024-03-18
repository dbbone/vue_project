<template>
  <div>

    <!--需增加筛选功能 用于查询前几届立项的赛事和获奖相关信息 
        查看详情点击时 再次请求服务器一次 查询具体的点中的某一年的某项赛事  为弹出框  
     -->
   
   <h1 style="text-align:center">
     <el-dropdown trigger="click" @command="commandchose">
   <!--此处year就是头部的届次 每次year改变就会被监视 执行一次axios函数向数据库请求一次 得到当前届次的赛事信息 -->
  <span class="el-dropdown-link" style="font-size:25px">
    {{year}}<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">                <!-- 此处用axios请求得到总共有多少个下拉框 -->
    <el-dropdown-item v-for="(item,index) in years " :key="index" :command="item">{{item}}</el-dropdown-item>
    
  </el-dropdown-menu>
</el-dropdown>已立项赛事信息</h1>





<!--下方是查看详情弹框 -->

<el-dialog

  :visible.sync="dialogVisible"
  width="30%"
  >

   <el-descriptions title="详细信息">
    <el-descriptions-item label="赛事名称">{{nowcheck.name}}</el-descriptions-item>
    <el-descriptions-item label="赛事等级">{{nowcheck.level}}</el-descriptions-item>
    <el-descriptions-item label="IA">{{nowcheck.IA}}</el-descriptions-item>
    <el-descriptions-item label="赛事负责人">{{nowcheck.leader}}</el-descriptions-item>
    <el-descriptions-item label="ID">{{nowcheck.id}}</el-descriptions-item>
</el-descriptions>
   
  <span slot="footer" class="dialog-footer">
    
    <el-button  @click="dialogVisible = false">关闭</el-button>
  </span>
</el-dialog>

   
  
  <el-table
    :data="tableDataSearch"
    height="800"
    border
    style="width: 100%;margin-top:20px">
    <el-table-column
      prop="name"
      label="赛事"
      width="180">
     
    </el-table-column>
    <el-table-column
      prop="level"
      label="赛事等级"
      width="180">
    </el-table-column>
    <el-table-column
      prop="leader"
      label="赛事负责人">
    </el-table-column>
    <el-table-column
      prop="id"
      label="赛事id">
    </el-table-column>
    
    
    <el-table-column>
      <template slot-scope="scope">  <!--scope会默认把包含这行数据的整个对象传进去 而不是仅仅展示的数据-->
    <el-button  @click="handleclick(scope.row)" >查看详情</el-button>
      </template>
    </el-table-column>
    

    <!-- <el-table-column>
      <template  slot-scope="scope"> 
       <span>{{scope.$index}}</span>
       <el-button>点击</el-button>
      </template>
      </el-table-column>  -->


    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope"> <!--加了scope后才能输入    -->
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      </el-table-column>
  </el-table>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
      name:'saishi',
    data() {
      return {
        search:'',


        //下方为头部控制第几届变量
        year:'2023',
        years:['2020','2021','2022','2023'],


        //detail 
        //下方为查看详情的缓存信息 点击一次 请求服务器一次 
        dialogVisible: false,


       //缓存信息
        nowcheck:{
         name:'',
         ID:'',
         IA:'',
         level:'',
         leader:'',

        },


        
       //all
       //下方为表格的展示信息
        tableData: [{
         
          name: '蓝桥杯',
          level:'A',
          leader:'a',
          IA:'1',
          ID:'',
        }, {
          name: 'ICPC',
           level:'A',
          leader:'b',
           IA:'1',
           ID:'',
        }, {
          
          name: '软件外包',
          level:'A',
          leader:'c',
           IA:'1',
           ID:'',
        }, {
          
          name: '大学生程序设计',
         level:'A',
          leader:'d',
           IA:'1',
           ID:'',
        }, {
          
          name: '多媒体设计',
           level:'A',
          leader:'e', 
           IA:'1',
           ID:'',
        }, {
        
          name: 'ccpc',
          level:'A',
          leader:'f',
           IA:'1',
           ID:'',
        }, 
     ]
      }
    },
    methods:{
     //点击查看详情相关方法
      handleclick(row){
         console.log(row),
         this.nowcheck=row;
         this.dialogVisible = true    //一定要加上this 
      },

      checkdetail(){
        dialogVisible = true
      },








    //  async getyear(newval){
    //      const{data:res}= await axios({
    //       method:'GET',
    //       url:`http://localhost/student/id/${newval}` 
    //          });


async getyear(newval){
         const{data:res}= await axios({
          method:'GET',
          url:`http://localhost/competition?current=1&limit=30&key=&year=${newval}` 
             });
      console.log(res);
      this.tableData=[];
      console.log(res.data.length);
        for(let i=0 ; i<res.data.length ;i++){
            this.tableData.push({'name':res.data[i].name,'level':res.data[i].level,'leader':res.data[i].responsiblePersonName,'id':res.data[i].id});
            

        }
           
  
        console.log(this.tableData);
      },



      // console.log(res)   
      // let i= res.data.length;
      //  this.tableData=[];
      //   for(let j=0;j<i;j++){
      //       this.tableData.push({'name':res.data[j].name,'level':res.data[j].studentId,'leader':res.data[j].classes,
      //       'IA':res.data[j].major,'ID':res.data[j].college,
      //       });  

      //       console.log(this.tableData)
      // }
   



      
 


      commandchose(command){
        this.year=command;
      }

    },

    watch:{
      year:{
        handler:'getyear',
        immediate:true
      }
    },



    computed:{

      //表格的筛选功能
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

    
    truetable(){
      return this.tableData
    }



    
  }
  }
</script>