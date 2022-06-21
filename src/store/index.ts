import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    cards: [],
    isLoader: true,
  },
  getters: {
  },
  mutations: {
    SET_CARDS(state, data)
    {
      state.cards = data
    },
    IS_LOADING(state, payload)
    {
      state.isLoader = payload
    },
  },
  actions: {
    async  getCard({ commit })
    {
      // запускаем фон загрузки
      commit('IS_LOADING', true)
      const data = await axios.get('https://jsonplaceholder.typicode.com/users')

      // передаем загруженные карточки в store
      commit('SET_CARDS', data)
    },
  },
  modules: {
  },
})