.<template>
   <div>
       <input type="text" v-model="myname">
       <div>这是{{myname}}</div>
   </div>
</template>

<script>
export default {
    name:"MyTest",
    data(){
        return {
            myname:""
        }
    }
}
</script>

<style>

</style>