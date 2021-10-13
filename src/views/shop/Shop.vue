<template>
  <div class="wrapper">
  <div class="search">
    <div
      class="search__back iconfont"
      @click="handleBackClick"
    >&#xe6db;</div>
    <div class="search__content">
      <span class="search__content__icon iconfont">&#xe6c6;</span>
      <input class="search__content__input" placeholder="请输入商品名称" />
    </div>
  </div>
    <ShopInfo :item="item" :hideBorder="true"/>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import ShopInfo from '../../components/ShopInfo'

export default {
  name: 'Shop',
  components: { ShopInfo },
  setup () {
    const router = useRouter()
    const item = {
      expressLimit: 0,
      expressPrice: 5,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      name: '沃尔玛',
      sales: 10000,
      slogan: 'VIP尊享满89元减4元运费券',
      _id: '1'
    }
    const handleBackClick = () => {
      router.back()
    }
    return { item, handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  padding: 0 .18rem;
}
.search{
  height: .32rem;
  display: flex;
  margin: .2rem 0 .16rem 0;
  line-height: .32rem;
  &__back{
    font-size: .24rem;
    width: .3rem;
    color: #B6B6B6;
  }
  &__content{
    display: flex;
    flex: 1;
    background: #F5F5F5;
    border-radius: .16rem;
    &__icon{
      width: .44rem;
      text-align: center;
      color: #B7B7B7;
    }
    &__input{
      padding-right: .2rem;
      width: 100%;
      display: block;
      height: .32rem;
      border: none;
      outline: none;
      background: none;
      font-size: .14rem;
      &::placeholder{
        color: #333;
      }
    }
  }
}
</style>
