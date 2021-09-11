import { createStore } from 'vuex'

export default createStore({
  state: {
    name: 'dell'
  },
  mutations: {
    change(state,str){
      state.name=str
    }
  },
  actions: {
    change(state,str){
      setTimeout(()=>{
        state.commit('change',str)
      },2000)

    }
  },
  modules: {
  }
})
