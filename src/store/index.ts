import { createStore } from 'vuex'
import axios from 'axios'

// interface Requests {
//   id: number,
//     name: string,
//     username: string,
//     email: string,
//     address?: {
//         street: string,
//         suite: string,
//         city?: string,
//         zipcode: number | string,
//         geo: {
//           lat: number | string,
//           lng: number | string,
//         }
//     },
//     phone: number | string,
//     website: string,
//     company: {
//         name:string,
//         catchPhrase:string,
//         bs:string,
//     }
// }

export default createStore({
  state: {
    cards: [{
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    }],
    isLoader: true,
  },
  getters: {},
  mutations: {
    SET_CARDS(state, data)
    {
      return state.cards = data
    },
    IS_LOADING(state, payload)
    {
      return state.isLoader = payload
    },
  },
  actions: {
    async  getCard({ commit })
    {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')

      // передаем загруженные карточки в store
      await commit('SET_CARDS', data)
      console.log(data)
    },
  },
  modules: {
  },
})