<template>
  <div class="card">
    <div class="card-header">
      <h2 class="card__title ttu">title</h2>
      <div class="img">preview</div>
    </div>
    <div class="card-body">
      <h3 class="card__subtitle ttu">sub</h3>
      <!-- <p>{{body}}</p> -->
    </div>
    <div class="card-footer flex-sb">
      <button class="succes">купить</button>
    </div>
  </div>



</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  props: ['body', 'id', 'title', 'userId'],
})
</script>