<template>
  <div class="wrapper">
      <div class="top">
        <div class="top__header">
          <div class="iconfont top__header__back">&#xe6db;</div>
          确认订单
        </div>
        <div class="top__receiver">
          <div class="top__receiver__title">收货地址</div>
          <div class="top__receiver__address">北京理工大学国防科技源。。。</div>
          <div class="top__receiver__info">
            <span class="top__receiver__info__name">瑶妹（先生）</span>
            <span class="top__receiver__info__phone">189110245562</span>
          </div>
          <div class="iconfont top__receiver__enter">&#xe6db;</div>
        </div>
      </div>
      <div class="products">
        <div class="products__title">
          {{ shopName }}
        </div>
        <div
          v-for="item in productList"
          :key="item._id"
        >
          <div class="products__item">
            <img
              class="products__item__img"
              :src="item.imgUrl"
            />
            <div class="products__item__detail">
              <h4 class="products__item__title">{{ item.name }}</h4>
              <p class="products__item__price">
                <span>
                  <span class="products__item__yen">&yen;</span>{{item.price}}x{{item.count}}
                </span>
                <span class="products__item__total">
                  <span class="products__item__yen">&yen;</span>{{item.price *item.count}}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="order">
        <div class="order__price">实付金额 <b>￥{{calculations.price}}</b></div>
        <div class="order__btn">提交订单</div>
      </div>
  </div>
</template>

<script>
import { useCommonCartEffect } from '../../effects/cartEffects'
import { useRoute } from 'vue-router'

export default {
  name: 'orderCofirmation',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { productList, shopName, calculations } = useCommonCartEffect(shopId)
    return { productList, calculations, shopName }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.wrapper{
  position: absolute;
  left: 0;
  right: 0;
  top:0;
  bottom: 0;
  background-color: #EEE;
}
.top{
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 50%);
  background-repeat: no-repeat;
  &__header{
    position: relative;
    padding-top: .26rem;
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
  &__receiver{
    position: absolute;
    left: .18rem;
    right: .18rem;
    bottom: 0;
    height: 1.11rem;
    background: #FFF;
    border-radius: .04rem;
    &__title{
      padding: .16rem 0 .14rem .16rem;
      font-size: .16rem;
      color: #333;
      line-height: .22rem;
    }
    &__address{
      padding: 0 .4rem 0 .16rem;
      font-size: .14rem;
      color: #333;
      line-height: .2rem;
    }
    &__info{
      padding: .06rem 0 0 .16rem;
      &__name{
        font-size: .12rem;
        color:#666;
        line-height: .18rem;
        margin-right: .06rem;
      }
    }
    &__enter {
      position: absolute;
      right: .16rem;
      top: .5rem;
      color: #666;
      font-size: .2rem;
      transform: rotate(180deg);
    }
  }
}
.products{
  margin: .16rem .18rem .55rem .18rem;
  background: #FFF;
  &__title{
    font-size: .16rem;
    color: #333;
    padding: .16rem .16rem 0 .16rem;
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0.16rem;
    &__img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }
    &__detail{
      flex: 1;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__price {
      display: flex;
      margin: 0.06rem 0 0 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $hightlight-fontColor;
      width: 100%;
    }
    &__total{
      text-align: right;
      color: #000;
      flex: 1;
    }
    &__yen {
      font-size: 0.12rem;
    }
  }
}

.order {
  display: flex;
  height: .49rem;
  line-height: .49rem;
  background: #fff;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  &__price{
    flex: 1;
    text-indent: .24rem;
    font-size: .14rem;
    color: #333;
  }
  &__btn{
    width: .98rem;
    background: #4FB0F9 ;
    color: #fff;
    text-align: center;
    font-size: .14rem;
  }
}
</style>
