<script>

//importo le componenti
import { store } from '../store.js';


export default {
  
  //creo il mio oggetto tramite props
  props:{
    myCard: Object
  },

  data(){
    return{
      store,
    }
  },
  //richiamo le funzioni
  mounted(){
    this.getVote(),
    this.getNoVote()
  },

  methods:{
    //funzione per le stelle dei voti
    getVote(){
      let vote = Math.ceil(this.myCard.vote_average / 2)
      return vote
    },
    //funzione per le stelle dei voti vuote
    getNoVote(){
      let noVote = 5 - this.getVote()
      console.log(noVote)
      return noVote
    }
  }
}
</script>

<template>

  <div>

    <!--controllo se è presente un'immagine-->
    <div v-if="(myCard.poster_path !== null)">
      <img :src="'https://image.tmdb.org/t/p/w300/' + myCard.poster_path" alt="imgs">
    </div>
    <div v-else>
      <img src="../../public/NotAvailable.jpg" alt="img" class="img_not_found">
    </div>

    <!--mostro a schermo le informazioni che mi servono-->
    <div>Titolo: {{ myCard.title }}{{ myCard.name }}</div>
    <div>Titolo originale: {{ myCard.original_title }}{{ myCard.original_name }}</div>
    <div>Lingua: <img :src="'../../node_modules/country-flag-icons/flags/1x1/' + myCard.original_language.toUpperCase() + '.svg'" alt="IMMAGINE NON TROVATA" class="flags"></div>
    <span>Voto: </span>
   
    <!--ciclo for per le stelle dei voti-->
    <span v-for="vote in getVote()" :key="vote"><i class="fa-solid fa-star" style="color: #d9dc18;"></i></span>
    
    <!--ciclo for per le stelle dei voti vuote-->
    <span v-for="noVote in getNoVote()" :key="noVote"><i class="fa-solid fa-star" style="color: #c0c0b4;"></i></span>
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