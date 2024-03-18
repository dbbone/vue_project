import vuerouter from 'vue-router'
import LiXiang from '../components/竞赛赛事管理/竞赛立项'
import shangchuan from '../components/竞赛获奖管理/获奖上传'
import zhuye from '../components/主页'
import News from '../pages/News'
import Message from '../pages/Message'
import saishi   from '../components/竞赛赛事管理/赛事信息'
import xuesheng from '../components/竞赛团队'

export default new vuerouter({
    routes:[
        {
              name:'zy',
               path:'/',
               redirect:'/zhuye'
        },
        {
            name:'LiXiang',
            path:'/LiXiang',
            component:LiXiang
        },
        {
            path:'/zhuye',
            component:zhuye  
        },
        {
            name:'SaiShi',
            path:'/SaiShi',
            component:saishi,
            children:[{
                path:'News',
                component:News
            },
            {
                path:'Message',
                component:Message
            }
        
            ]
        },
        {
            name:'xuesheng',
            path:'/Student',
            component:xuesheng
        },
        {   
            name:'shangchuan',
            path:'/shangchuan',
            component:shangchuan
        }
        
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
