<template>
  <section class="preview-banner">
    <h2>this is shop page</h2>
  </section>
  <section class="cards">
    <AppCard/>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppCard from '@/components/card/AppCard.vue'

export default defineComponent({
  name: 'ShopView',
  components: { AppCard },
})
</script>