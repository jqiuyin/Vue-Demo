<template>
    <div class="top">
      <div class="top__header">
        <div class="iconfont top__header__back">&#xe6db;</div>
        确认订单
      </div>
      <div class="top_receiver">
        <div class="top__receiver__title">收货地址</div>
        <div class="top__receiver__address">北京理工大学国防科技源。。。</div>
        <div class="top__receiver__info">
          <span class="top__receiver__info__name">瑶妹（先生）</span>
          <span class="top__receiver__info__phone">189110245562</span>
        </div>
        <div class="iconfont top__receiver__enter">&#xe6db;</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'orderCofirmation'
}
</script>

<style lang="scss" scoped>
.top{
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 50%);
  background-repeat: no-repeat;
  &__header{
    position: relative;
    padding-top: .4rem;
    line-height: .24rem;
    color: #FFF;
    text-align: center;
    font-size: .16rem;
    &__back{
      position: absolute;
      font-size: .22rem;
      left: .18rem;
    }
  }
}
</style>
