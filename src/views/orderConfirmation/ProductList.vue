<template>
  <div class="products">
    <div class="products__title">
      {{ shopName }}
    </div>
    <div class="products__wrapper">
      <div class="products__list">
        <template
          v-for="item in productList"
          :key="item._id"
        >
          <div
            class="products__item"
            v-if="item.count > 0"
          >
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
                  <span class="products__item__yen">&yen;</span>{{(item.price *item.count).toFixed(2)}}
                </span>
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { useCommonCartEffect } from '../../effects/cartEffects'
import { useRoute } from 'vue-router'

export default {
  name: 'ProductList',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { productList, shopName } = useCommonCartEffect(shopId)
    return { productList, shopName }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.products{
  margin: .16rem .18rem .1rem .18rem;
  background: $bgcolor;
  &__title{
    font-size: .16rem;
    color: $content-fontcolor;
    padding: .16rem;
  }
  &__wrapper{
    position: absolute;
    margin: 0 0.18rem;
    left: 0;
    right: 0;
    bottom: .6rem;
    top: 2.6rem;
    overflow-y: scroll;
  }
  &__list{
    background: $bgcolor;
  }
  &__item {
    position: relative;
    display: flex;
    padding:  0 0.16rem 0.16rem 0.16rem;
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
      color: $dark-fontColor;
      flex: 1;
    }
    &__yen {
      font-size: 0.12rem;
    }
  }
}
</style>
