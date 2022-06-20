<template>
   <h2>This is an basket page</h2>
  <section class="basket">
    <AppCardBasket/>
    <AppCardBasket/>
    <AppCardBasket/>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppCardBasket from '@/components/card-basket/AppCardBasket.vue'

export default defineComponent({
  components: { AppCardBasket },
})
</script>