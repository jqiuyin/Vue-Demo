import { createStore } from 'vuex'

export default createStore({
  state: {
    name: 'dell'
  },
  mutations: {
    changeName(state,str){
      state.name=str
    }
  },
  actions: {
    getData(state){
      setTimeout(()=>{
        state.commit('changeName','hello')
      },2000)

    }
  },
  modules: {
  }
})
