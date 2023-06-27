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
      return noVote
    }
  }
}
</script>

<template>

  <section>

    <div class="card_2">

      <!--fronte della card-->
      <div class="card-side front">

          <!--controllo se è presente un'immagine-->
          <div v-if="(myCard.poster_path !== null)">
            <img :src="'https://image.tmdb.org/t/p/w300/' + myCard.poster_path" alt="imgs">
          </div>
          <div v-else>
            <img src="../../public/NotAvailable.jpg" alt="img" class="img_not_found">
          </div>

      </div>

      <!--retro della card-->
      <div class="card-side back">

        <!--mostro a schermo le informazioni che mi servono-->
        <div class="info">
          <div><strong>Titolo: </strong>{{ myCard.title || myCard.name }}</div>
          <div><strong>Titolo originale: </strong>{{ myCard.original_title }}{{ myCard.original_name }}</div>
          <div><strong>Lingua: </strong><img :src="'../../node_modules/country-flag-icons/flags/1x1/' + myCard.original_language.toUpperCase() + '.svg'" alt="IMMAGINE NON TROVATA" class="flags"></div>
          <span>
            <strong>Voto: </strong>
            <!--ciclo for per le stelle dei voti-->
            <i v-for="vote in getVote()" :key="vote" class="fa-solid fa-star" style="color: #d9dc18;"></i>
            
            <!--ciclo for per le stelle dei voti vuote-->
            <i v-for="noVote in getNoVote()" :key="noVote" class="fa-solid fa-star" style="color: #c0c0b4;"></i>
          </span>
          <div class="overview"><strong>Overview: </strong>{{ myCard.overview }}</div>
        </div>

      </div>
    </div>



  </section>

</template>

<style lang="scss" scoped>

section{
  position: relative;
}

.info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 20px;
}

.flags{
  width: 35px;
  height: 30px;
}

.img_not_found{
  width: 300px;
  height: 450px;
}

.card_2 {
  perspective: 150rem;
  height: 450px;
  width: 300px;
  box-shadow: none;
  position: relative;
}

.card-side {
  height: 450px;
  transition: all 0.8s ease;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  color: white;
  background-color: black;
  box-shadow: 5px 8px 30px gray;
}

.card-side.back {
  transform: rotateY(-180deg);
}

.card_2:hover .card-side.front {
  transform: rotateY(180deg);
}

.card_2:hover .card-side.back {
  transform: rotateY(0deg);
}

.overview{
  height: 250px;
  overflow-y: auto;
  padding: 0 20px;
}

</style>