<script>

//importo le componenti
import { store } from '../store';

export default {
  data(){
    return{
      store
    }
  }
}
</script>

<template>

  <header class="py-4">
    <div class="container">
      <div class="row d-flex justify-content-between">
        <div class="col-3">
          <img src="../../public/logo.png" alt="">
        </div>
        <div class="col-3">
          <div class="input-group pt-3">
            <input type="text" class="form-control" placeholder="Cerca" aria-label="Recipient's film" aria-describedby="button-addon2" v-model="store.filmSearch">
            <button class="btn btn-danger" type="button" id="button-addon2" @click="$emit('film')"><i class="fa-solid fa-magnifying-glass" style="color: #fff;"></i></button>
          </div>
        </div>
      </div>
    </div>
  </header>

</template>

<style lang="scss" scoped>
  header{
    background-color: black;
  }
</style>