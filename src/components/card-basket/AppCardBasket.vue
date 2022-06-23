<template >
  <div class="card">
    <div class="card-header">
      <h2 class="card__title ttu">{{id}}</h2>
      <div class="img">preview</div>
    </div>
    <div class="card-body">
      <h3 class="card__subtitle ttu">{{username}}</h3>
      <p>{{website}}</p>
    </div>
    <div class="card-footer flex-sb">
      <button class="succes warn" @click="removeBasket">удалить</button>
      <button class="succes">купить</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'


export default defineComponent({
  props: ['id', 'username', 'website'],

  setup(context)
  {
    const store = useStore()
    const removeBasket = () =>
    {
      store.state.inBasket.shift(context)
      store.commit('ADD_CADR_BASKET')
    }

    return {
      removeBasket,
    }
  },
})
</script>