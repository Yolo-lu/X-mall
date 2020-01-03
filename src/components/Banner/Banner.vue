<template>
  <div>
    <div class="banner" @mouseenter="enter" @mouseleave="leave" @mousemove="move">
      <Carousel v-model="value1" loop :autoplay="autoplays" class="banner-list-width" v-if="banner" radius-dot >
        <CarouselItem v-for="(item,index) in banner.panelContents" :key="index" :style="{transform: 'rotateY('+rotateY+'deg) rotateX('+rotateX+'deg)'}">
          <div class="demo-carousel" > 
            <img :src="item.picUrl" alt class="img" />
            <img :src="item.picUrl2" alt class="img" />
            <img :src="item.picUrl3" alt class="img" />
          </div>
        </CarouselItem>
      </Carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        value1:0,
        autoplays:true,
        rotateY:0,
rotateX:0
    };
  },
  props: {
    banner: {
      type: Object,
      default: () => {}
    }
  },
  components: {},
  methods: {
      enter(){
          this.autoplays=false
      },
      leave(){
          this.autoplays=true
      },
      move(e){
          // console.log(e.offsetX,e.offsetY);
          if(e.offsetX>0){
              if(e.offsetX>610){
                  this.rotateX=(e.offsetY-250)*-0.032
              }else{
                  this.rotateX=(e.offsetY-250)*0.032
              }
          }
          if(e.offsetY>0){
                if(e.offsetX>610){
                  this.rotateY=(e.offsetX-610)*0.023
              }else{
                  this.rotateY=(e.offsetX-610)*-0.023
              }
          }
      }
  },
  mounted() {
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.banner {
  padding: 20px;
  border-radius: 10px;
  .demo-carousel{
      display: flex;
      height: 500px;
      width: 100%;
      
      position: relative;
      .img{
          flex: 1;
          position: absolute;
          width: 100%;
          border-radius: 10px;
          height: 100%;
          margin-top: 10px
      }
  }
}
</style>