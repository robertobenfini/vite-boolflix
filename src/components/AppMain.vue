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
      <div class="content d-flex flex-wrap">
        <!--ciclo for dell'array-->
        <div v-for="(card, index) in store.arrayFilms" :key="index">
            <AppCards :myCard="card" />
        </div>
      </div>
    </div>
  </div>
</main>

</template>

<style lang="scss" scoped>
  
</style>