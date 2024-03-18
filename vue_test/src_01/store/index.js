
import vuex from 'vuex'
import Vue from 'vue'

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
    persons2:[
        {name:'m1',id:'001',done:false},
        {name:'m2',id:'002',done:true},
        {name:'m3',id:'003',done:false},
        {name:'m4',id:'004',done:true},
    ]
}
Vue.use(vuex)
export default new vuex.Store({
    actions:actions,
    mutations:mutations,
    state:state,
    getters:getters
})
