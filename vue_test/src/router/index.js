import vuerouter from 'vue-router'

import zhuye from '../components/主页'

import jiaoshixinxi from '../components/信息管理/教师信息'    //信息管理路由

import loginpage from '../components/loginpage'
import studentpage from '../components/studentpage'
import adminpage from '../components/adminpage'



import personalpage from  '../components/personalpage'     //团队路由



import LiXiang from '../components/竞赛赛事管理/竞赛立项'            //赛事管理路由
import saishi   from '../components/竞赛赛事管理/赛事信息'
import tuandui from '../components/竞赛赛事管理/竞赛团队'
import myteam from '../components/竞赛赛事管理/我的团队'
import newteam from '../components/竞赛赛事管理/新建团队'
import checkteam from '../components/竞赛赛事管理/查询团队'



import huojiangxinxi from '../components/获奖信息+申报管理/获奖信息'     //获奖信息+申报路由
import huojiangshenbao from '../components/获奖信息+申报管理/获奖申报'


import gongZuoLiangFenPei from '../components/分配/工作量分配'      //分配路由
import jiangJinFenPei from '../components/分配/奖金分配'


import huoJiangShenHe from '../components/审核/获奖审核'           //审核路由
import jiangjinShenHe from '../components/审核/奖金审核'
import liXiangShenHe from '../components/审核/立项审核'
import gongZuoLiangShenHe from '../components/审核/工作量审核'




export default new vuerouter({
    routes:[

        {                             //主页路由 该路由使得一开始就直接展示登录 输入密码页面
            path:'/',
            component:loginpage , 
           
          
        },


      {                   //学生页面
            name:'studentpage',
            path:'/studentpage',
            component:studentpage,
            path: '/studentpage', redirect: { name: 'zhuye' },
            children:[
                {
                  name:'zhuye',
                  path:'/zhuye',
                  component:zhuye,
                    
                },
                {
                    path: '/',
                    redirect: { name: 'zhuye' }
                },


                {
                    name:'personalpage',
                    path:'/personalpage',
                    component:personalpage,
                },

            
                
                
                 



            
                 //竞赛赛事管理路由组
        {
            name:'LiXiang',                  //竞赛立项路由
            path:'/LiXiang',
            component:LiXiang                
        },
      
        {                                  //赛事信息路由
            name:'SaiShi',
            path:'/SaiShi',
            component:saishi,               
        },

        {                             //竞赛团队路由
            name:'tuandui',
            path:'/Tuandui',
            component:tuandui,
            redirect:'/Tuandui/Myteam',              
            children:[
                {
                    name:'myteam',         //竞赛团队子路由
                    path:'Myteam',         //我的团队路由
                    component:myteam,
                },
                {
                   path:'Newteam',
                   name:'newteam',        //新建团队路由
                   component:newteam
                },

                {
                    path:'Checkteam',
                    name:'checkteam',        //查询团队路由
                    component:checkteam
                 },
                
            ]
        },
    

     //获奖信息+申报路由组
    {                                //获奖信息
        name:'huojiangxinxi',
        path:'huojiangxinxi',
        component:huojiangxinxi
    },
    {                              //获奖申报
        name:'huojiangshenbao',
        path:'huojiangshenbao',
        component:huojiangshenbao
    },




     
       //分配路由组   
 
        {                              //工作量分配
         name: "gongZuoLiangFenPei",
         path:'/gongZuoLiangFenPei',
         component:gongZuoLiangFenPei
        },
        {                              //奖金分配
            name: "jiangJinFenPei",
            path:'/jiangJinFenPei',
            component:jiangJinFenPei
        },


    
    //审核路由组

        {                              //获奖审核
            name: "huoJiangShenHe",
            path:'/huoJiangShenHe',
            component:huoJiangShenHe
        },
        {                              //奖金审核
            name: "jiangjinShenHe",
            path:'/jiangjinShenHe',
            component:jiangjinShenHe
        },
        {                              //工作量审核
            name: "gongZuoLiangShenHe",
            path:'/gongZuoLiangShenHe',
            component:gongZuoLiangShenHe
        },
        {                              //立项审核
            name: "liXiangShenHe",
            path:'/liXiangShenHe',
            component:liXiangShenHe
        },
  

            ]

        },





        // {                             //主页路由
        //     path:'/zhuye',
        //     component:zhuye  
        // },


        // {                              //主页重定向路由
        //       name:'zy',
        //        path:'/',
        //        redirect:'/zhuye'             
        // },

       



     


        
        
    ]
})

// router.beforeEach((to, from, next) => {
//       if(!sessionStorage.getItem("token")){
//       window.location.href="http://127.0.0.1:5500/%E7%99%BB%E5%BD%95.html"
//      }
//      else{
//          next()
//      }
    
// })
