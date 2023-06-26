<script>

//importo le componenti
import { store } from '../store.js';


export default {
  props:{
    myCard: Object
  },

  data(){
    return{
      store,
    }
  },
}
</script>

<template>

  <div>

    <!--mostro a schermo le informazioni che mi servono-->
    <div v-if="(myCard.poster_path !== null)">
      <img :src="'https://image.tmdb.org/t/p/w300/' + myCard.poster_path" alt="imgs">
    </div>
    <div v-else>
      <img src="../../public/NotAvailable.jpg" alt="img" class="img_not_found">
    </div>

    <div>Titolo: {{ myCard.title }}{{ myCard.name }}</div>
    <div>Titolo originale: {{ myCard.original_title }}{{ myCard.original_name }}</div>
    <div>Lingua: <img :src="'../../node_modules/country-flag-icons/flags/1x1/' + myCard.original_language.toUpperCase() + '.svg'" alt="IMMAGINE NON TROVATA" class="flags"></div>
    <div>Voto: {{ myCard.vote_average }}</div>
    <div>Tipo: {{ myCard.media_type }}</div>

  </div>

</template>

<style lang="scss" scoped>
.flags{
  width: 35px;
  height: 30px;
}

.img_not_found{
  width: 300px;
  height: 450px;
}
</style>