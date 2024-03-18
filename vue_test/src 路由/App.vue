<template>
  <div id="root">
    <div>
    <div class="row">
        <Top/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link class="list-group-item" active-class="active" :to="{
            path:'/About',
            query:{
              id:5,
              title:'th'
            }
          }">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/Home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
              <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import Top from './components/Tp.vue'
export default {
  name: 'App',
     components:{Top}
}
</script>