<template>
  <AppLoading :class="[this.$store.state.isLoader ? 'active' : null]"></AppLoading>
  <the-header/>
  <main>
   <router-view/>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheHeader from '@/components/header/TheHeader.vue'
import AppLoading from '@/components/loader/AppLoading.vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: { TheHeader, AppLoading },
  setup()
  {
    const store = useStore()

    const { isLoader } = store.state

    const load = () =>
    {
      // запускаем анимацию загрузки
      store.commit('IS_LOADING', true)
      // загружаем товар
      store.dispatch('getCard')
      // останавливаем анимацию загрузки
        .then(() => setTimeout(() => store.commit('IS_LOADING', false), 1000))
    }
    load()

    return {
      isLoader,
    }
  },
})
</script>