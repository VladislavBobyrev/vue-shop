<template>
  <AppLoading :class="[isLoader ? 'active' : '']"></AppLoading>
  <the-header/>
  <main>
   <router-view/>
  </main>
</template>

<script>
import TheHeader from '@/components/header/TheHeader.vue'
import AppLoading from '@/components/loader/AppLoading.vue'
import { useStore } from 'vuex'

export default {
  components: { TheHeader, AppLoading },
  setup()
  {
    const store = useStore()

    const { isLoader } = store.state
    store.dispatch('getCard')

    // останавливаем фон загрузки
    store.commit('IS_LOADING', false)

    return {
      isLoader,
    }
  },
}
</script>