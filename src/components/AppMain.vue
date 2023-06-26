<script>

//importo le componenti
import { store } from '../store.js';

import AppCards from './AppCards.vue';

export default {
  components:{
    AppCards
  },
  data(){
    return{
      store
    }
  },
}
</script>

<template>

<main>
  <div class="container">
    <div class="row">

      <!--ciclo for dell'array-->
      <div v-for="(card, index) in store.arrayFilms" :key="index">
          <AppCards :myCard="card" />
          <br>
      </div>
    </div>
  </div>
</main>

</template>

<style lang="scss" scoped>
  
</style>