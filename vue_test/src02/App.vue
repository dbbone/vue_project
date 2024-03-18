<template>
   <el-container>
     <el-header>
       hello
     </el-header>
    <el-container>
    <el-aside width=100px>
      这是傍边
    </el-aside>
   <el-main>
   <el-table                  
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">   
    <el-table-column
      label="Name"
      prop="name">
    </el-table-column>   
    <el-table-column
      label="Date">
      <template slot-scope="scope"> 
        <span v-if="!scope.row.isedit">{{scope.row.date}}</span>
        <input v-if="scope.row.isedit" @blur="handleEdit2(scope.row,$event)">
      </template>
    </el-table-column>
    <el-table-column
      label="place"
      prop="address">
    </el-table-column>
    <el-table-column   
      align="right">   //每个column元素都能提供整行的数据 
      <template slot="header">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
   </el-main>
      </el-container>
    <el-footer style="text-align:center">
      <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="姓名" label-width=120px>
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="地址" label-width=120px>
              <el-input v-model="form.place" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" label-width=120px>
              <el-select value="2" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button >取 消</el-button>
            <el-button type="primary">确 定</el-button>
          </div>
      </el-dialog>
      <button @click="shuju">dian</button>
    </el-footer>
   </el-container>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
     data(){
       return {
           tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
          
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        search: '',
        form:{
          name:'',
          data:'',
          place:'',
          region1:'',
          region2:'',
        },
        dialogFormVisible: false,
      }
     },
      methods: {
      handleEdit(index, row) {
        console.log(index, row);
        if(row.hasOwnProperty('isedit')){
          row.isedit=true
        }
        else{ this.$set(row,'isedit',true)
        }
      },
      handleEdit2(row,e) {
         row.isedit=false
         row.date=e.target.value
      },
      handleEdit3(row){
        row.name=this.form.name;
        row.place=this.form.place
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.tableData=this.tableData.filter((obj)=>{
          return obj!==row
        })
      },
      shuju(){
        axios.get('http://localhost:8080/atguigu/101010100.html').then(
          response=>{
            console.log('请求成功',response.data)
          },
          error=>{
            console.log('请求失败了',error.message)
          }
          )
      }
    },
}
</script>