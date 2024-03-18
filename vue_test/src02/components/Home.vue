<template>
        <div>
              <h2>Home组件内容</h2>
              <div>
                <ul class="nav nav-tabs">
                  <li>
                    <router-link class="list-group-item" active-class="actived" to="/Home/News">News</router-link>
                  </li>
                  <li>
                    <router-link class="list-group-item" active-class="actived" to="/Home/Message">Message</router-link>
                  </li>
                </ul>
                  <router-view></router-view>
                  <!-- <ul>
                    <li>
                      <a href="/message1">message001</a>&nbsp;&nbsp;
                    </li>
                    <li>
                      <a href="/message2">message002</a>&nbsp;&nbsp;
                    </li>
                    <li>
                      <a href="/message/3">message003</a>&nbsp;&nbsp;
                    </li>
                  </ul> -->
                </div>
              </div>
</template>

<script>
export default {
    name:'Home'
}
</script>

<style>

</style>