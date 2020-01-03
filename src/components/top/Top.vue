<template>
  <div>
    <div v-if="!navBarFixed">
      <div class="head">
        <div class="wrap">
          <BackTop></BackTop>
          <div class="top">
            <div class="left"></div>
            <div class="right">
              <div>
                <Input search placeholder="请输入商品信息" />
              </div>
              <div class="allGoods">全部商品</div>
              <div class="allGoods">捐赠</div>
              <div>
                <img src="../../assets/images/user.png" alt class="img" />
              </div>
              <div>
                <Icon type="md-cart" size="20" color="#707070" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="box-shadow: 2px 2px 2px #e2e2e2; background: #fff">
        <div class="wrap">
          <div class="second">
            <div class="dot"></div>
            <div class="manu" :class="{color:active===0}" @click="home">首页</div>
            <div class="dot"></div>
            <div class="manu" :class="{color:active===1}" @click="all">全部</div>
            <div class="dot"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="more" v-if="navBarFixed"></div>
    <div class="header" v-if="navBarFixed" style="">
      <div class="wrap">
        <div class="seconds">
          <div class="left1">
            <div class="r-dot"></div>
            <div class="manu" :class="{color:active===0}" @click="home">首页</div>
            <div class="r-dot"></div>
            <div class="manu" :class="{color:active===1}" @click="all">全部</div>
            <div class="r-dot"></div>
          </div>
          <div class="right">
            <div>
              <img src="../../assets/images/user.png" alt class="r-img" />
            </div>
            <div class="icon">
              <Icon type="md-cart" size="20" color="#707070" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      navBarFixed: false
    };
  },
  components: {},
  methods: {
    home() {
      this.active = 0;
    },
    all() {
      this.active = 1;
    },
    watchScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //  当滚动超过 50 时，实现吸顶效果
      if (scrollTop > 100) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.watchScroll);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.head {
  background: #1a1a1a;
  height: 100px;

  .top {
    display: flex;
    justify-content: space-between;
    line-height: 100px;
  }
  .left {
    background: url(../../assets/images/global-logo-M.png) no-repeat 50%;
    background-size: cover;
    display: block;
    width: 50px;
    height: 40px;
    text-indent: -9999px;
    background-position: 0 0;
    margin-top: 30px;
  }
}
.right {
  display: flex;
  .allGoods {
    width: 110px;
    color: #c8c8c8;
    display: block;
    font-size: 14px;
    padding: 0 25px;
    &:hover {
      color: #fff;
    }
  }
  .img {
    width: 20px;
    height: 20px;
    margin: 40px 20px 0 -10px;
  }
  .r-img{
    margin: 20px 20px 0 -20px;
      width: 20px;
    height: 20px;
  }
  .icon{
    margin-top: 20px
  }
}
.second {
  display: flex;
  height: 90px;
  line-height: 90px;
}
.manu {
  padding: 0 10px;
  color: #666;
  &:hover {
    color: #5079d9;
  }
}
.dot {
  width: 2px;
  height: 2px;
  border-radius: 40%;
  background: #666;
  top: 50%;
  margin-top: 45px;
}
.r-dot{
   width: 2px;
  height: 2px;
  border-radius: 40%;
  background: #666;
  top: 50%;
  margin-top: 35px;
}
.color {
  font-weight: bold !important;
}
.seconds {
  display: flex;
  justify-content: space-between;
}
.left1 {
  display: flex;
  height: 70px;
  line-height: 70px;
}
.header{
  box-shadow: 2px 2px 2px #e2e2e2;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 70px;
  z-index: 99;
  background: #fff !important;
}
.more {
  height: 120px;
  width: 100%;
}
</style>