<template>
  <div class="order">
    <div class="order__price">实付金额 <b>￥{{calculations.price}}</b></div>
    <div class="order__btn">提交订单</div>
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
    return { calculations }
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
</style>
