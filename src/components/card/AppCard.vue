<template>
  <div class="card flex-column">
    <div class="card-header">
      <div class="img">preview</div>
      <h2 class="card__title ttu">{{username}}</h2>
    </div>
    <div class="card-body flex-column">
      <h3 class="card__subtitle ttu">{{id}}</h3>
      <p>{{website}}</p>
      <p>{{company}}</p>
    </div>
    <div class="card-footer flex-sb">
      <button :class="['succes', isBasket ? 'warn' : '' ]" @click="addBasket">{{isBasket ? "добавлено" : "в корзину"}}</button>
      <span>{{id}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  props: ['id', 'username', 'website', 'company'],
  setup(context)
  {
    const store = useStore()
    const isBasket = ref(false)

    const addBasket = () =>
    {
      store.state.inBasket.push(context)
      isBasket.value = true
      store.commit('ADD_CADR_BASKET')
    }

    return {
      addBasket,
      isBasket,
    }
  },
})
</script>