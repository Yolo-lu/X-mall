<template>
 <div class="color">
   <top></top>
   <div class="wrap ">
      <banner :banner=datas[0]></banner>
      <active :active=datas[1]></active>
      <hotGoods :hotGoods=datas[2]></hotGoods>
      <selected :select=datas[3]></selected>
      <selected :select=datas[4]></selected>
      <selected :select=datas[5]></selected>
      <active :active=datas[6]></active>
   </div>
   <bottom></bottom>
 </div>
</template>

<script>
import banner from '../components/Banner/Banner'
import active from '../components/Active/Active'
import hotGoods from '../components/hotGoods/hotGoods'
import selected from '../components/select/select'
 export default {
   data () {
     return {
       datas:[]
     }
   },
   components: {
    banner,
    active,
    hotGoods,
    selected
   },
   methods: {

   },
   mounted() {
     this.$api.getHome().then(res=>{
       this.datas=res.data
       console.log(this.datas);
     }).catch(err=>{
       console.log(err);
     })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.color{
  background: #ededed !important;
}
</style>