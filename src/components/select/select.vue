<template>
  <div>
    <div class="select" v-if="select">
      <div class="title">{{select.name}}</div>
      <div class="hotGoods">
        <div v-for="(item,index) in select.panelContents" :key="index" class="item">
          <div v-if="index===0">
            <img :src="item.picUrl" alt />
          </div>
          <div
            v-if="index>0"
            @mouseenter="enter(index)"
            @mouseleave="leave(index)"
            :class="{shadow:lock && num===index}"
          >
            <img :src="item.picUrl" alt />
            <div class="name">{{item.productName}}</div>
            <div class="detail">{{item.subTitle}}</div>
            <div v-if="lock&&num===index" class="buy">
              <div class="addCart">加入购物车</div>
              <div class="buy1">立即购买</div>
            </div>
            <div class="price" v-else>￥{{item.salePrice}}:00</div>
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
      lock: false,
      num: null
    };
  },
  props: {
    select: {
      type: Object,
      default: () => {}
    }
  },
  components: {},
  methods: {
    enter(index) {
      this.lock = true;
      this.num = index;
    },
    leave() {
      this.lock = false;
      this.num = null;
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.select {
  border-radius: 10px;
  border: 1px solid #e2e2e2;
  margin: 30px 0;
  background: #fff;
  .title {
    padding-left: 30px;
    position: relative;
    z-index: 10;
    height: 60px;
    padding: 0 10px 0 24px;
    border-bottom: 1px solid #d4d4d4;
    border-radius: 8px 8px 0 0;
    box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06);
    background: #f3f3f3;
    line-height: 60px;
    font-size: 18px;
    color: #333;
  }
  .hotGoods {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 25%;
      &:first-child {
        width: 50% !important;
        img {
          width: 100% !important;
          height: 100% !important;
          margin: 0;
        }
      }
      img {
        margin: 50px auto 10px;
        width: 206px;
        height: 206px;
      }
      .name {
        line-height: 1.2;
        font-size: 16px;
        color: #424242;
        margin: 0 auto;
        padding: 0 14px;
        text-align: center;
        overflow: hidden;
      }
      .detail {
        text-align: center;
        line-height: 1.2;
        font-size: 12px;
        color: #d0d0d0;
        padding: 10px;
      }
      .price {
        margin: 15px 0;
        height: 30px;
        text-align: center;
        line-height: 30px;
        color: #d44d44;
        font-family: Arial;
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
}
.shadow {
  box-shadow: 0 10px 10px 10px #e2e2e2 !important;
  border: 1px solid #e2e2e2;
  height: 100%;
}
.buy {
  display: flex;
  margin: 20px;
  justify-content: space-around;
  .addCart{
    border:1px solid #e2e2e2;
    padding: 2px 5px;
    text-align: center;
    border-radius: 5px;
  }
  .buy1{
    border:1px solid #e2e2e2;
    padding: 2px 5px;
    text-align: center;
    background: #0082CF;
    color: #fff;
    border-radius: 5px;
  }
}
</style>