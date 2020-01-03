<template>
 <div>
     <div class="active" v-if="active">
         <div v-for="(item,index) in active.panelContents" :key="index" class="pic">
             <div>
                 <img :src="item.picUrl" alt="" class="img">
             </div>
         </div>
     </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   props:{
       active:{
           type:Object,
           default:()=>{}
       }
   },
   components: {

   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.active{
    display: flex;
    margin: 20px 0;
    height: 200px;
    border-right: 1px solid #e2e2e2;
    .pic{
     flex: 1;
      border: 1px solid #e2e2e2;
      border-right: 0;
      &:hover {
        box-shadow: 4px 0 8px #999 inset !important;
        border: 1px solid #e2e2e2;
    }
    }
    .img{
        width: 100%;
        height: 200px;
        
    }
}
</style>