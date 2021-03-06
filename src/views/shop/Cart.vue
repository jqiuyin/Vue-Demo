<template>
<div class="mask" v-if="showCart && calculations.total > 0 " @click="handleCartShowChange"></div>
  <div class="cart">
    <div class="product" v-if="showCart && calculations.total > 0">
      <div class="product__header">
        <div class="product__header__all">
          <span
            class="product__header__icon iconfont"
            v-html="calculations.allChecked ? '&#xe652;':'&#xe6f7;' "
            @click="() => setCartItemsChecked(shopId)"
          ></span>
          全选
        </div>
        <div class="product__header__clear">
        <span
          @click="() => cleanCartProducts(shopId)"
          class="product__header__clear__btn"
        >清空购物车</span>
        </div>
      </div>
        <div
          class="product__item"
          v-for="item in productList"
          :key="item._id"
        >
          <div
            class="product__item__checked iconfont"
            v-html="item.check ? '&#xe652;':'&#xe6f7;'"
            @click="() => changeCartItemChecked(shopId,item._id)"
          >
          </div>
          <img
            class="product__item__img"
            :src="item.imgUrl"
          />
          <div class="product__item__detail">
            <h4 class="product__item__title">{{item.name}}</h4>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>{{item.price}}
              <span class="product__item__origin">&yen;{{item.oldPrice}}</span>
            </p>
          </div>
          <div class="product__number">
            <span
              class="product__number__minus"
              @click="() => { changeCartItemInfo(shopId, item._id, item, -1) }"
            >-</span>
            {{ item.count || 0 }}
            <span
              class="product__number__plus"
              @click="() => { changeCartItemInfo(shopId, item._id, item, 1) }"
            >+</span>
          </div>
        </div>
    </div>
      <div class="check">
        <div class="check__icon">
          <img
            src="http://www.dell-lee.com/imgs/vue3/basket.png"
            class="check__icon__img"
            @click="handleCartShowChange"
          />
          <div class="check__icon__tag">{{ calculations.total }}</div>
        </div>
        <div class="check__info">
          总计：<span class="check__info__price">&yen; {{calculations.price}}</span>
        </div>
        <div class="check__btn" v-show="calculations.total > 0">
          <router-link :to="{path: `/OrderConfirmation/${shopId}`}">
            去结算
          </router-link>
        </div>
      </div>
  </div>

</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'

const useCartEffect = (shopId) => {
  const { changeCartItemInfo, productList, calculations } = useCommonCartEffect(shopId)
  const store = useStore()

  const changeCartItemChecked = (shopId, productId) => {
    store.commit('changeCartChecked', {
      shopId, productId
    })
  }

  const cleanCartProducts = (shopId) => {
    store.commit('cleanCartProducts', { shopId })
  }

  const setCartItemsChecked = (shopId) => {
    store.commit('setCartItemsChecked', { shopId })
  }
  return { productList, changeCartItemInfo, changeCartItemChecked, cleanCartProducts, calculations, setCartItemsChecked }
}

const toggleCartEffect = () => {
  const showCart = ref(false)
  const handleCartShowChange = () => {
    showCart.value = !showCart.value
  }
  return { showCart, handleCartShowChange }
}

export default {
  name: 'Cart',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { showCart, handleCartShowChange } = toggleCartEffect()
    const { productList, changeCartItemInfo, changeCartItemChecked, cleanCartProducts, calculations, setCartItemsChecked } = useCartEffect(shopId)
    return { shopId, productList, changeCartItemInfo, changeCartItemChecked, cleanCartProducts, calculations, setCartItemsChecked, showCart, handleCartShowChange }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.mask{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0,0,0,.5);
  z-index: 1;
}
.cart{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: $bgcolor;
}
.check{
  display: flex;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;
  line-height: .49rem;
  &__icon{
    position: relative;
    width: .84rem;
    &__img{
      display: block;
      margin: .12rem auto;
      width: .28rem;
      height: .26rem;
    }
    &__tag{
      position: absolute;
      left: .46rem;
      min-width: .2rem;
      padding: 0 .04rem;
      height: .2rem;
      line-height: .2rem;
      background-color: $hightlight-fontColor;
      border-radius: .1rem;
      font-size: .12rem;
      text-align: center;
      right: .2rem;
      top: .04rem;
      color: $bgcolor;
      transform: scale(.5);
      transform-origin: left center;
    }
  }
  &__info{
    flex: 1;
    color: $content-fontcolor;
    font-size: .12rem;
    &__price{
      color: $hightlight-fontColor;
      font-size: .18rem;
    }
  }
  &__btn{
    width: .98rem;
    background-color: #4FB0F9;
    font-size: .14rem;
    text-align: center;
    a {
      color: $bgcolor;
      text-decoration: none
    }
  }
}

.product {
  flex: 1;
  overflow-y: scroll;
  background: $bgcolor;
  &__header {
    display: flex;
    line-height: .52rem;
    border-bottom: 1px solid $content-bgColor ;
    font-size: .14rem;
    color: $content-fontcolor;
    &__all{
      width: .64rem;
      margin-left: .18rem;
    }
    &__icon{
      display: inline-block;
      vertical-align: top;
      margin-right: .1rem;
      color: $btn-bgColor;
      font-size: .2rem;
    }
    &__clear{
      margin-right: .16rem;
      flex: 1;
      text-align: right;
      &__btn{
        display: inline-block;
      }
    }
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid $content-bgColor;
    &__checked{
      color: $btn-bgColor;
      font-size: .2rem;
      line-height: .5rem;
      margin-right: .2rem;
    }
    &__detail{
      overflow: hidden;
    }
    &__img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }
    &__title {
      margin: .06rem 0 0 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__price {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $hightlight-fontColor;
    }
    &__yen {
      font-size: 0.12rem;
    }
    &__origin {
      line-height: 0.2rem;
      font-size: 0.12rem;
      color: $light-fontColor;
      text-decoration: line-through;
      margin-right: 0.06rem;
    }
    .product__number {
      position: absolute;
      right: 0;
      bottom: .26rem;
      &__plus,
      &__minus {
        width: 0.2rem;
        height: 0.2rem;
        line-height: 0.16rem;
        display: inline-block;
        border-radius: 50%;
        font-size: 0.2rem;
        text-align: center;
      }
      &__minus {
        border: 0.01rem solid $medium-fontColor;
        color: $medium-fontColor;
        margin-right: 0.05rem;
      }
      &__plus {
        background: $btn-bgColor;
        color: $bgcolor;
        margin-left: 0.05rem;
      }
    }
  }
}
</style>
