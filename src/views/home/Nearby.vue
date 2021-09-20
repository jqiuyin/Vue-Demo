<template>
  <div class="nearby">
    <h3 class="nearby_title">附近店铺</h3>
    <div class="nearby__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/near.png"
        class="nearby__item__img"
      />
      <div class="nearby__content">
        <div class="nearby__content__title">沃尔玛</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag">月售一万加</span>
          <span class="nearby__content__tag">月售一万加</span>
          <span class="nearby__content__tag">月售一万加</span>
        </div>
        <p class="nearby__content__highlight">vip尊享</p>
      </div>
    </div>
    <div class="nearby__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/near.png"
        class="nearby__item__img"
      />
      <div class="nearby__content">
        <div class="nearby__content__title">沃尔玛</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag">月售一万加</span>
          <span class="nearby__content__tag">月售一万加</span>
          <span class="nearby__content__tag">月售一万加</span>
        </div>
        <p class="nearby__content__highlight">vip尊享</p>
      </div>
    </div>
    <div class="nearby__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/near.png"
        class="nearby__item__img"
      />
      <div class="nearby__content">
        <div class="nearby__content__title">沃尔玛</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag">月售一万加</span>
          <span class="nearby__content__tag">月售一万加</span>
          <span class="nearby__content__tag">月售一万加</span>
        </div>
        <p class="nearby__content__highlight">vip尊享</p>
      </div>
    </div>
    <div class="nearby__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/near.png"
        class="nearby__item__img"
      />
      <div class="nearby__content">
        <div class="nearby__content__title">沃尔玛</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag">月售一万加</span>
          <span class="nearby__content__tag">月售一万加</span>
          <span class="nearby__content__tag">月售一万加</span>
        </div>
        <p class="nearby__content__highlight">vip尊享</p>
      </div>
    </div>
    <div class="nearby__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/near.png"
        class="nearby__item__img"
      />
      <div class="nearby__content">
        <div class="nearby__content__title">沃尔玛</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag">月售一万加</span>
          <span class="nearby__content__tag">月售一万加</span>
          <span class="nearby__content__tag">月售一万加</span>
        </div>
        <p class="nearby__content__highlight">vip尊享</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Nearby'
}
</script>

<style lang="scss">
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  &__item {
    display: flex;
    padding-top: 0.12rem;
    &__img {
      margin-right: 0.16rem;
      width: 0.56rem;
      height: 0.56rem;
    }
  }
  &__content {
    padding-bottom: 0.12rem;
    border-bottom: 1px solid $content-bgColor;
    flex: 1;
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-fontcolor;
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-fontcolor;
    }
    &__tag {
      margin-right: 0.16rem;
    }
    &__highlight {
      color: #e93b3b;
      line-height: 0.18rem;
      font-size: 0.13rem;
      margin: 0.08rem 0 0 0;
    }
  }
}
</style>