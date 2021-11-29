<template>
  <div class="order">
    <div class="order__price">实付金额 <b>￥{{calculations.price}}</b></div>
    <div class="order__btn">提交订单</div>
  </div>
  <div class="mask">
    <div class="mask__content">
      <h3 class="mask__content__title"> 确认离开收银台?</h3>
      <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
      <div class="mask__content__btns">
        <div
          class="mask__content__btn mask__content__btn--first"
          @click="handleCancleOrder"
        >取消订单</div>
        <div
          class="mask__content__btn mask__content__btn--last"
          @click="handleConfirmOrder"
        >确认支付</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCommonCartEffect } from '../../effects/cartEffects'
import { useRoute } from 'vue-router'

export default {
  name: 'Order',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { calculations } = useCommonCartEffect(shopId)
    const handleCancleOrder = () => {
      alert('cancle')
    }
    const handleConfirmOrder = () => {
      alert('confirm')
    }
    return { calculations, handleCancleOrder, handleConfirmOrder }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.order {
  display: flex;
  height: .49rem;
  line-height: .49rem;
  background: $bgcolor;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  &__price{
    flex: 1;
    text-indent: .24rem;
    font-size: .14rem;
    color: $content-fontcolor;
  }
  &__btn{
    width: .98rem;
    background: #4FB0F9 ;
    color: $bgcolor;
    text-align: center;
    font-size: .14rem;
  }
}
.mask {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0,0,0,0.5);
  &__content{
    width: 3rem;
    height: 1.56rem;
    background: #FFF;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: .04rem;
    text-align: center;
    &__title{
      font-size: .18rem;
      color: #333;
      line-height: .26rem;
      margin: .24rem 0 0 0;
    }
    &__desc {
      color: #666666;
      font-size: .14rem;
      margin: .08rem 0 0 0;
    }
    &__btns{
      margin: .24rem .58rem 0 .58rem;
      display: flex;
    }
    &__btn{
      flex: 1;
      width: .8rem;
      line-height: .32rem;
      border-radius: .16rem;
      font-size: .14rem;
      &--first{
        margin-right: .12rem;
        border: .01rem solid #4FB0F9;
        color: #4FB0F9;
      }
      &--last{
        margin-left: .12rem;
        background: #4FB0F9;
        color: #FFF;
      }
    }
  }
}
</style>
