import vuerouter from 'vue-router'
import About from '../components/About'
import Home from '../components/Home'
import News from '../pages/News'
import Message from '../pages/Message'

export default new vuerouter({
    routes:[
        {
            path:'/About',
            component:About
        },
        {
            path:'/Home',
            component:Home,
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
        
    ]
})