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
    <ShopInfo :item="data.item" :hideBorder="true"/>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'

export default {
  name: 'Shop',
  components: { ShopInfo },
  setup () {
    const router = useRouter()
    const data = reactive({
      item: {}
    })
    const getItemDate = async () => {
      const result = await get('/api/shop/1')
      if (result?.errno === 0 && result?.data) {
        data.item = result.data
      }
      console.log(result)
    }
    getItemDate()
    const handleBackClick = () => {
      router.back()
    }
    return { data, handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
.wrapper{
  padding: 0 .18rem;
}
.search{
  height: .32rem;
  display: flex;
  margin: .2rem 0 .04rem 0;
  line-height: .32rem;
  &__back{
    font-size: .24rem;
    width: .3rem;
    color: #B6B6B6;
  }
  &__content{
    display: flex;
    flex: 1;
    background: $search-bgColor;
    border-radius: .16rem;
    &__icon{
      width: .44rem;
      text-align: center;
      color: $search-fontColor;
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
        color: $content-fontcolor;
      }
    }
  }
}
</style>
