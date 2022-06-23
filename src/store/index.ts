import { createStore } from 'vuex'
import axios from 'axios'

interface Requests {
  id: number,
    name: string,
    username: string,
    email: string,
    address?: {
        street: string,
        suite: string,
        city?: string,
        zipcode: number | string,
        geo: {
          lat: number | string,
          lng: number | string,
        }
    },
    phone: number | string,
    website: string,
    company: {
        name:string,
        catchPhrase:string,
        bs:string,
    }
}

export default createStore({
  state: {
    cards: [{}],
    inBasket: [],
    isLoader: true,
  },
  getters: {},
  mutations: {
    SET_CARDS(state, data:Requests[])
    {
      return state.cards = data
    },
    IS_LOADING(state, payload)
    {
      return state.isLoader = payload
    },
    ADD_CADR_BASKET(state)
    {
      return state.inBasket
    },
  },
  actions: {
    async  getCard({ commit })
    {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')

      // передаем загруженные карточки в store
      await commit('SET_CARDS', data)
    },
  },
  modules: {
  },
})