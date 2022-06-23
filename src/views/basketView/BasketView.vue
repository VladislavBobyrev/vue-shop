<template>
  <section class="basket" v-if="cards.length > 0">
    <app-card-basket v-for="card in cards" :key="card.id"
    :id="card.id"
    :username="card.username"
    :website="card.website"
    >
    </app-card-basket>
  </section>
  <h2 v-else>This is an basket page</h2>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import AppCardBasket from '@/components/card-basket/AppCardBasket.vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: { AppCardBasket },
  setup()
  {
    const store = useStore()
    const cards = computed(() => (store.state.inBasket.length > 0 ? store.state.inBasket : store.state.inBasket))

    return {
      cards,
    }
  },
})
</script>