<template>
  <div class="wrapper">
    <div class="title">我的订单</div>
    <div class="orders">
      <div class="order">
        <div class="order__title">
          沃尔玛
          <span class="order__status">已取消</span>
        </div>
        <div class="order__content">
          <div class="order__content__imgs">
            <img class="order__content__img" src="http://www.dell-lee.com/imgs/vue3/tomato.png" />
            <img class="order__content__img" src="http://www.dell-lee.com/imgs/vue3/tomato.png" />
            <img class="order__content__img" src="http://www.dell-lee.com/imgs/vue3/tomato.png" />
            <img class="order__content__img" src="http://www.dell-lee.com/imgs/vue3/tomato.png" />
          </div>
          <div class="order__content__info">
            <div class="order__content__price">￥36.8</div>
            <div class="order__content__count">共2件</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Docker :currentIndex="2"/>
</template>

<script>
import Docker from '../../components/Docker'
import { get } from '../../utils/request'
import { reactive, toRefs } from 'vue'

const useOrderListEffect = () => {
  const data = reactive({ list: [] })
  const getNearbyList = async () => {
    const result = await get('/api/order')
    console.log(result)
    if (result?.errno === 0 && result?.data?.length) {
      data.list = result.data
    }
  }
  getNearbyList()
  const { list } = toRefs(data)
  return { list }
}

export default {
  name: 'OrderList',
  components: { Docker },
  setup () {
    const list = useOrderListEffect()
    return { list }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.title{
  line-height: .44rem;
  background: $bgcolor;
  font-size: .16rem;
  color: $content-fontcolor;
  text-align: center;
}
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  background: rgb(248,248,248);
}
.order{
  padding: .16rem;
  background: $bgcolor;
  margin: .16rem .18rem;
  &__title{
    font-size: .16rem;
    color: $content-fontcolor;
    line-height: .22rem;
    margin-bottom: .16rem;
  }
  &__status{
    float: right;
    font-size: .14rem;
    color: $light-fontColor;
  }
  &__content{
    display: flex;
    &__imgs{
      flex: 1;

    }
    &__img{
      width: .4rem;
      height: .4rem;
      margin-right: .12rem;
    }
    &__info{
      width: .7rem;
    }
    &__price{
      font-size: .14rem;
      color: $hightlight-fontColor;
      line-height: .2rem;
      text-align: right;
      margin-bottom: .04rem;
    }
    &__count{
      font-size: .12rem;
      color: $content-fontcolor;
      text-align: right;
      line-height: .14rem;
    }
  }
}
</style>
