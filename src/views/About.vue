<template>
  <div class="about">
    <h1 @click="handleClick">This is an about page</h1>
    <h1>{{myName}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  computed: {
    myName(){
      return this.$store.state.name;
    }
  },
  methods:{
    handleClick(){
      this.$store.dispatch('change','hello');

    }
  }
}
</script>