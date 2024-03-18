<template>
<div>
  <div style="font-weight:bold ; border-bottom: 1px solid #dbdbdb;height:50px">

   <h1>筛选条件</h1>

  </div>



 <div style="margin-top:25px">
   <el-row :gutter="20">
  <el-col :span="6"><div>赛事名称 
    <el-input style="width:200px" v-model="form1.name">  </el-input>    
    </div></el-col>
  <el-col :span="6"><div>赛事等级    
    <el-select v-model="form1.level" placeholder="全部">
      <el-option label="全部" value=""></el-option>
      <el-option label="A类" value="A类"></el-option>
       <el-option label="B类" value="B类"></el-option>
        <el-option label="C类" value="C类"></el-option>
    </el-select> 
    </div></el-col>
  <el-col :span="6"><div>获奖级别 
    <el-select v-model="form1.level2" placeholder="全部">
      <el-option label="全部" value=""></el-option>
      <el-option label="国际一等" value="国际一等"></el-option>
      <el-option label="国际二等" value="国际二等"></el-option>
      <el-option label="国家一等" value="国家一等"></el-option>
      <el-option label="区域一等" value="区域一等"></el-option>
        <el-option label="区域二等" value="区域二等"></el-option>
          <el-option label="区域三等" value="区域三等"></el-option>
      <el-option label="省级一等" value="省级一等"></el-option>
      <el-option label="省级二等" value="省级二等"></el-option>
      <el-option label="省级三等" value="省级三等"></el-option>
      <el-option label="校级一等" value="校级一等"></el-option>
      <el-option label="省级二等" value="省级二等"></el-option>
      <el-option label="省级三等" value="省级三等"></el-option>
      <el-option label="参与奖" value="参与奖"></el-option>
       <el-option label="其他" value="其他"></el-option>
      
    </el-select>  </div></el-col>
</el-row>
  
  <el-row :gutter="20">
  <el-col :span="6"><div >团队成员<el-input style="width:200px" v-model="form1.students">  </el-input> </div></el-col>
  <el-col :span="6"><div >指导老师<el-input style="width:200px" v-model="form1.teachers">  </el-input> </div></el-col>
</el-row>

 <el-row :gutter="20">
  <el-col :span="6">
    <div>获奖时间<el-date-picker
      v-model="form1.date.timebegin"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions"
      >
    </el-date-picker>
    </div>
    </el-col>
 
  <el-col :span='6'>
    <div>
<el-date-picker
      v-model="form1.date.timeend"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions"
      >
    </el-date-picker>
    </div>
  </el-col>
</el-row>

 </div >




 <div style="height:50px; background-color:grey; margin-top:20px">

  <!-- <el-button style="float:right ;" @click="showdata2()" >
     查询
  </el-button> -->

 </div>


 <div style="margin-top:50px">   <!--此处为表格区域 > <!-->



 <el-table
    :data="showdata2"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="name"
      label="赛事名称"
      width="150">
    </el-table-column>

 <el-table-column
      prop="date"
      label="获奖时间"
      width="150">
    </el-table-column>




    <el-table-column
      prop="level"
      label="赛事等级"
      width="120">
    </el-table-column>
    <el-table-column
      prop="level2"
      label="获奖级别"
      width="120">
    </el-table-column>
    <el-table-column
      prop="groupname"
      label="团队名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="groupkind"
      label="团队类型"
      width="120">
    </el-table-column>
    <el-table-column
      label="团队人员"
      width="100">
     <el-button type="text">查看详情</el-button>
    </el-table-column>
    <el-table-column
      label="指导教师"
      width="100">
      <el-button type="text">查看详情</el-button>
    
    </el-table-column>
        



     <el-table-column
    
      label="获奖图片"
      width="120">
        <!-- <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
      </template> -->

      <div class="demo-image__preview">
  <el-image 
    style="width: 100px; height: 100px"
    :src="url" 
    :preview-src-list="srcList">
  </el-image>
</div>
    
    </el-table-column>
    
  </el-table>



 </div>


</div>

</template>

<script>
import { computed } from 'vue';
export default {
     name:'huojiangxinxi',

      data() {
      return {

       url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
      ,




      form1:{
        name:'',
        level:'',
        level2:'',
        students:'',
        teachers:'',
        date:{ timebegin:'',
               timeend:'',
              }
       
      },
       

        tableData: [{
          date: '2023-01-02',
          name: 'icpc',
          level:'A类',
          level2:'国家一等',
          groupname:'小',
          groupkind:'团队赛',
          students:[],
          teachers:['1','2'],
       
        },{
          date: '2016-05-02',
          name: 'icpc',
          level:'B类',
          level2:'国际一等',
          groupname:'大大大',
          groupkind:'团队赛',
          students:[],
          teachers:['m','n','n'],
       
        },{
          date: '2023-09-02',
          name: 'icpc',
          level:'C类',
          level2:'省级一等',
          groupname:'中',
          groupkind:'个人赛',
          students:[],
          teachers:[],
       
        }, {
          date: '2021-10-02',
          name: 'icpc',
          level:'A类',
          level2:'省级一等',
          groupname:'底',
          groupkind:'',
          students:[],
          teachers:['张','张','李'],
       
        },
        {
          date: '2016-05-02',
          name: '蓝桥杯',
          level:'B类',
          level2:'省级一等',
          groupname:'',
          groupkind:'',
          students:[],
          teachers:[],
       
        },
        {
          date: '2016-05-02',
          name: '蓝桥杯',
          level:'B类',
          level2:'国家一等',
          groupname:'',
          groupkind:'',
          students:[],
          teachers:[],
       
        },],



        
        pickerOptions: {
          // disabledDate(time) {
          //   return time.getTime() > Date.now();
          // },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        value3:'',
      }

      
        
      },
      methods: {
       showdata(form1){              //循环form1的各个属性 并每个进行判断
      if (form1) {
        return this.tableData.filter((data) => {
          return Object.keys(data).some((key) => {   //some指前面数组的每个元素都用包裹的箭头函数判断一次
            
            return String(data[key]).toLowerCase().indexOf(form1.key) > -1
          });
        });
      }
      return this.tableData;
       },


      //  handleClearbegin(){
      //    this.form1.date.timebegin=''
      //  },

      //  handleClearend(){
      //    this.form1.date.timeend=''
      //  },

    //    showdata2(){
         
     
    //    return  this.tableData.filter( item => {
    //     return Object.keys( this.form1 ).every( key => {
    //        return String( item[ key ] ).toLowerCase().includes( 
    //                String( this.form1[ key ] ).trim().toLowerCase() )
    //         } )
    //  })



    // },


 } ,   
    computed:{
        truetabledata() {
          return this.tableData
        },


          showdata2(){
            console.log((new Date(this.form1.date.timebegin)).getTime())   //此处需要用new date再次封装才能用getTime()
            console.log((new Date(this.form1.date.timeend)).getTime())
       return  this.tableData.filter( item => {
        return Object.keys( this.form1 ).every( key => { 
          if (key==='date'){
             
               if(this.form1[key].timebegin===''&&this.form1[key].timeend===''){
                return true;
            }




            if(this.form1[key].timebegin==='' && this.form1[key].timeend!=''){
              return (  new Date(item[key]).getTime()<(new Date(this.form1[key].timeend)).getTime()  ) ? true : false 
            }



             if(this.form1[key].timebegin!='' && this.form1[key].timeend===''){
              return new Date(item[key]).getTime()>(new Date(this.form1[key].timebegin)).getTime() ? true : false 
            }



            if(   new Date(this.form1[key].timebegin).getTime()  <new Date(item[key]).getTime()<new Date(this.form1[key].timeend).getTime()){
                return true;
            }
            else {
              return false;
            }


          } 


          else{   
           return String( item[ key ] ).toLowerCase().includes( 
                   String( this.form1[ key ] ).trim().toLowerCase() )
            }

        }
            
             )
        
     })
    },

       
    //       showdata2(){
    //    return  this.tableData.filter( item => {
    //     return Object.keys( this.form1 ).every( key => {     Object.keys(对象1) 返回对象1的各个属性名数组 就是key
    //        return String( item[ key ] ).toLowerCase().includes( 
    //                String( this.form1[ key ] ).trim().toLowerCase() )
    //         } )
    //  })
    // },


    }
   

      }

     
</script>
<style scoped>
   .el-col div{
     font-weight:bold ;
   }
</style>