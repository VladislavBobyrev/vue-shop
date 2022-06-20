<template>
  <the-header/>
  <main>
   <router-view/>
  </main>
</template>

<script>
import TheHeader from '@/components/header/TheHeader.vue'

export default {
  components: { TheHeader },
}
</script>