import vuerouter from 'vue-router'
import About from '../components'
import Home from '../components'

export default new vuerouter({
    routes:[
        {
            path:'./about',
            component:About
        },
        {
            path:'./home',
            component:Home
        }
    ]
})