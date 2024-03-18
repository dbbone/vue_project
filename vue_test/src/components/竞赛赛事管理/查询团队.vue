<template>
    <div style="margin-left:200px ; margin-top:25px">
    教师带领团队查询    
    <el-input style="width:500px" v-model="search" placeholder="请输入教师的工号"></el-input>
    <el-button @click="check">查询</el-button>
   <el-descriptions class="margin-top" v-for="(p,index) in checkteams1" :key="index"  :title="`${search}的团队${index}`" :column="3"  border>


       <el-descriptions-item v-for=" (value1,key1,index) in p" :key="index">
      <template slot="label">
        {{key1}}
      </template>
       {{value1.toString()}}
    </el-descriptions-item>



   </el-descriptions>

   </div>
</template>

<script>
import axios from 'axios'

//实现思路 : 直接查询数据库的数据展现在页面上
export default {
    
    name:'checkteam',
    data(){
        return{
          search:'',
          checkteams1:[]
        }
    },
       computed:{
     myteams(){
     return this.$store.state.myteams
     }
    },
    methods:{
      check(){
        var config = {
                method: 'get',
                url: `http://localhost/award/teacherId/${this.search}`,
                headers: { 
                    'User-Agent': 'Apifox/1.0.0 (https://www.apifox.cn)'
                }
                };

            axios(config)
            .then( (response)=> {
            console.log(response.data.data[0]);
            this.checkteams1=[];
            for(let i =0  ;  i<response.data.data.length ; i++){
              //从awardteam中获取 学生和指导老师的数组存入变量
              let stuarr =[];
              let teaarr=[];
              for(let j=0;j<response.data.data[i].awardTeacher.length;j++){
                    teaarr.push(response.data.data[i].awardTeacher[j].id)
                
              };
                 for(let j1=0;j1<response.data.data[i].awardTeacher.length;j1++){
                    stuarr.push(response.data.data[i].awardTeacher[j1].id)
                
              };
              console.log(stuarr);
              console.log(teaarr);
              // let {id:tid} = response.data.data[i].awardTeacher;
              // let {id:sid} = response.data.data[i].awardStudent;
              // console.log(sid);
              // console.log(tid);
            

              this.checkteams1.push({'id':response.data.data[i].awardTeam.id,"competitionId":response.data.data[i].awardTeam.competitionId,
              'name':response.data.data[i].awardTeam.name,"学生团队":stuarr , "指导老师团队":teaarr
              })
            }
            console.log("查询成功");
            })
            .catch(function (error) {
            console.log(error);
            });
                }
    }
  
}
</script>

<style>

</style>