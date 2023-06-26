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
    <div>Titolo: {{ myCard.title }}{{ myCard.name }}</div>
    <div>Titolo originale: {{ myCard.original_title }}{{ myCard.original_name }}</div>
    <div>Lingua: <img :src="'../../node_modules/country-flag-icons/flags/1x1/' + myCard.original_language.toUpperCase() + '.svg'" alt="IMMAGINE NON TROVATA"></div>
    <div>Voto: {{ myCard.vote_average }}</div>
    <div>Tipo: {{ myCard.media_type }}</div>
    
  </div>

</template>

<style lang="scss" scoped>
img{
  width: 35px;
  height: 30px;
}
</style>