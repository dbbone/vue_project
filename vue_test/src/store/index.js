
import vuex from 'vuex'
import Vue from 'vue'
import sign from './登录信息'
const actions ={
    
}
const mutations={
     JIA(state,obj){
         state.persons2.unshift(obj)
     },
     SHAN(state,id){
         state.persons2=state.persons2.filter((obj1)=>{
             return obj1.id!=id
         })
     },
     
}
const getters={
    TJ(state){
        return state.persons2.length
    },
    ZS(state){
        return state.persons2
    }
}
const state = {
     isshow:true //用来展示登录界面或者主页面
}
Vue.use(vuex)
export default new vuex.Store({
    actions:actions,
    mutations:mutations,
    state:state,
    getters:getters,
    modules:{
       sign      
    }
})