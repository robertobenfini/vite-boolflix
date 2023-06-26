<script>
//importo le componenti
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import { store } from './store.js';

export default {

    components:{
    AppHeader,
    AppMain
  },
  data(){
    return{
      store,
    }
  },

  //chiamo la funzione della chiamata API
  mounted(){
    this.getFilms()
  },

  //funzione chiamata API
  methods:{
    getFilms(){

      let myUrl=store.apiUrl;

      if(store.filmSearch !== ''){
        myUrl += `&query=${store.filmSearch}`
      }

      axios.get(myUrl).then((response) => {
      store.arrayFilms = response.data.results;
    })
    }
  }
}
</script>

<template>

  <div>

    <!--passo il valore dell'emit al padre-->
    <AppHeader @film="getFilms" />
    <AppMain />

  </div>

</template>

<style lang="scss">

  //collego i file di stile
  @use './styles/generals.scss' as *;
</style>