<template>
  <div class="color">
    <div class="wrap">
      <div class="bottom">
        <div class="item">
          <div v-for="(item,index) in list" :key="index" class="list">
            <div class="title">{{item.title}}</div>
            <div v-for="(item1,index1) in item.list" :key="index1" class="name">{{item1}}</div>
          </div>
        </div>
        <div class="right">
          <div class="num">1012139570</div>
          <div class="name">周一至周日 10:00-23:00（限Starrer或捐赠人联系）</div>
          <div class="help" @click="help(false)">在线帮助</div>
        </div>
      </div>
      <div class="footer">
       <div class="f-top">
          <div>Copyright 2017, exrick.cn Co., Ltd. All Rights Reserved.本网站设计内容大部分属锤子科技</div>
        <div class="web">
          <div>法律声明</div>
          <div>隐私条款</div>
          <div>开发者中心</div>
        </div>
       </div>
       <div class="f-bottom">
         <div class="name">蜀ICP备16030308号-1</div>
         <div class="name">蜀ICP证16030308号</div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: "订单服务", list: ["购买指南", "支付方式", "送货政策"] },
        { title: "服务支持", list: ["官方开源", "项目前端", "项目后端"] },
        { title: "自助服务", list: ["个人博客", "个人简介", "个人视频"] },
        { title: "其他项目", list: ["XPay支付系统", "数据共享", "待开发..."] },
        { title: "友情链接", list: ["宇cccc", "Smartisan", "Vue"] },
        { title: "关注我吧", list: ["腾讯 QQ", "腾讯 QQ", "官方邮箱"] }
      ]
    };
  },
  components: {},
  methods: {
    help(nodesc) {
      this.$Notice.open({
        title: "离线帮助",
        desc: nodesc ? "" : "没有人会帮助你，自己帮自己"
      });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.color {
  background: #fff !important;
  padding: 40px 5px;
}
.bottom {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e2e2e2;
  padding-bottom: 30px;
}
.item {
  display: flex;
  justify-content: space-between;
  flex: 2;
  .title {
    color: #646464;
    font-size: 12px;
    padding: 20px 0;
  }
}
.right {
  flex: 1;
  margin-left: 150px;
}
.name {
  color: #969696;
  font-size: 12px;
  line-height: 25px;
}
.num {
  color: #646464;
  font-size: 16px;
  padding: 20px 0;
  font-weight: bold;
}
.help {
  width: 130px;
  height: 34px;
  font-size: 14px;
  color: #5079d9;
  border: 1px solid #dcdcdc;
  margin-top: 8px;
  text-align: center;
  line-height: 34px;
}
.footer{
  padding: 30px 0;
  font-size: 12px;
  .f-top{
    display: flex;
    .web{
      display: flex;
      margin: 0 20px;
     div{
        padding: 0 20px;
      border-left: 1px solid #e2e2e2;
      color: #5079d9
     }
    }
  }
  .f-bottom{
    display: flex;
    margin: 10px 0
  }
}

</style>