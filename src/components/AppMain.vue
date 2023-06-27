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
  <div class="container pt-5">
    <div class="row">
      <div class="col d-flex flex-wrap justify-content-between">
        <!--ciclo for dell'array-->
        <div v-for="(card, index) in store.arrayFilms" :key="index" class="my_card">
            <AppCards :myCard="card" />
        </div>
      </div>
    </div>
  </div>
</main>

</template>

<style lang="scss" scoped>
  
  main{
    background-color: #232323;
  }
  .my_card{
    width: 300px;
    height: 450px;
    margin-bottom: 30px;
  }

</style>