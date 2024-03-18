<template>
    <div class="bg-purple" style="height:100%">
      
      <div>
        <el-row>
          <el-col :span="24" ><div class="grid-content bg-purple-dark" style="height:20px"></div></el-col>
        </el-row>
      </div>
      
      <el-row :gutter="20">
        <el-col :span="2"><div class="grid-content"></div></el-col>
        
        <el-col :span="6"><div class="grid-content bg-purple-light">
          
          <!-- 第一行教师个人信息及赛事浏览 -->
          <div style="text-align:center">
            <div class="demo-image">
              <!-- 图片 -->
              <div class="block" v-for="fit in fits" :key="fit">
                <span class="demonstration">{{ fit }}</span>
                <el-image
                  style="width: 100px; height: 100px"
                  :src="url"
                  :fit="fit"></el-image>
              </div>
              <div style="height:40px"></div>
              
              
              <!-- 个人信息 -->
              </div>
              <div style="height:100px,">
                <p>姓名：{{teacher.name}}</p>
                <br>
                <p>手机号码：{{teacher.phoneNumber}}</p>
                <br>
                <p>所属学院：{{teacher.collgeName}}</p>
                <br>
                <p>电子邮件:{{teacher.email}}</p>
              </div>
          </div>
            
        </div></el-col>
        
        <!-- 左侧赛事通知栏 -->
        <el-col :span="14"><div class="grid-content bg-purple-light">
          <el-table
      :data="projectData"
      style="width: 100%">
      <el-table-column
        prop="projectName"
        label="赛事名称"
        >
      </el-table-column>
      <el-table-column
        prop="superintendentName"
        label="负责人姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="projectDate"
        label="日期"
        width="180">
      </el-table-column>
    </el-table>
        </div></el-col>
        
        <el-col :span="2"><div class="grid-content"></div></el-col>
      </el-row>
    
      <div style="height:40px"></div>

      <!-- 用于存放第二行信息通知 -->
      <div>
        <el-row :gutter="20">
          <el-col :span="2"><div class="grid-content"></div></el-col>

          <!-- 用于存放table，显示信息中心通知 -->
          <el-col :span="20"><div class="grid-content bg-purple-light">

            <el-table
        :data="messageData"
        border
        style="width: 100%">
        <el-table-column
          prop="message"
          label="消息中心">
        </el-table-column>
        <el-table-column
          prop="messageDate"
          label="日期"
          width="180">
        </el-table-column>
      </el-table>

          </div></el-col>
          
          
          <el-col :span="2"><div class="grid-content"></div></el-col>
        </el-row>
    </div>
    
    
    </div>
</template>

<script>
export default {
    name:'zhuye',
    data() {
      return {
        
        // 用于存放图片
        fits: [''],
        url: 'https://img1.baidu.com/it/u=541593769,1554771931&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',
        
        // 用于存放教师信息
        teacher:{
          name:"XXX",
          collgeName:"信息与电子工程学院",
          email:"1234567890@zust.edu.cn",
          phoneNumber:"10086"
        },

        // 用于存放赛事信息
        projectData: [{
          projectName:'蓝桥杯',
          projectDate: '2022-10-02',
          superintendentName: '王小虎',
          }, {
            projectName:'蓝桥杯',
            projectDate: '2022-05-02',
            superintendentName: '王小虎',
          }, {
            projectName:'蓝桥杯',
            projectDate: '2022-08-02',
            superintendentName: '王小虎',
          }, {
            projectName:'蓝桥杯',
            projectDate: '2022-06-02',
            superintendentName: '王小虎',
          }, {
            projectName:'蓝桥杯',
            projectDate: '2022-01-03',
            superintendentName: '王小虎',
          }],

          // 用于存放消息中心信息
          messageData: [{
            message:'挑战杯申请已通过',
            messageDate: '2023-01-15',
          }, {
            message:'工作量分配申请已通过',
            messageDate: '2022-10-15',
        }, {
            message:'您的申请需要修改',
            messageDate: '2022-08-15',
        }, {
            message:'挑战杯开始报名啦！',
            messageDate: '2022-06-15',
        }]
        
      }
    }

}
</script>

<style scoped>
.juZhong{
  text-align: center;
}
.el-row {
  margin-bottom: 20px;
}
 .el-row:last-child {
    margin-bottom: 0;
  }
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>