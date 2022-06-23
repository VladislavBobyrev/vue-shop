<template>
  <section class="preview-banner">
    <h2>this is shop page</h2>
  </section>
  <section class="cards">
    <AppCard v-for="card in cards" :key="card.id"
      :id="card.id"
      :username='card.username'
      :website='card.website'
      :company='card.company'
    />

  </section>
  <button class="btn-center" @click="addPage">loading more...</button>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { computed, defineComponent } from 'vue'
import AppCard from '@/components/card/AppCard.vue'


export default defineComponent({
  name: 'ShopView',
  components: { AppCard },
  setup()
  {
    const store = useStore()

    const getAsyncCard = async () =>
    {
      await store.dispatch('getCard')
    }
    getAsyncCard()

    const cards = computed(() => (store.state.pageItems.length > 0 ? store.state.pageItems : store.state.pageItems))

    const addPage = () =>
    {
      store.state.conutPage++
      store.commit('GET_NEXT_PAGE')
    }

    return {
      cards,
      addPage,
    }
  },
})
</script>