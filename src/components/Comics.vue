<template lang="html">
  <div class="container">
    <div class="row">
      <div v-show="!loading">
        <a href="http://marvel.com">Data provided by Marvel. © 2018 MARVEL</a>
      </div><br>
      <div class="col s12 m6" v-for="comic in comics">
        <div class="card hoverable">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator"
              :src="comic.thumbnail.path + '.' + comic.thumbnail.extension"
              alt="...">
          </div>
         
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              <i class="material-icons right">more_vert</i>
            </span>

             <router-link 
                :to="'/comic/'+ comic.id + '/characters' "
                class="waves-effect waves-red btn">
                Preview
             </router-link> 
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              {{ comic.title }}
              <i class="material-icons right">close</i>
            </span>
            <p>{{ comic.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="loading" id="loading-spinner">
      <spinner></spinner>
    </div>
  </div>
</template>

<script>
import Spinner from 'vue-simple-spinner'

export default {
  props: ['comics', 'loading'],
  components: {
    'spinner': Spinner
  }
}
</script>

<style lang="css">
.card {
  border: 3px solid white !important;
}

.row {
  margin-top: 30px !important;
}
img {
  max-height: 500px !important;
}
#loading-spinner {
  margin-top: 170px !important;
}

.btn {
  background: white !important;
  color: black !important;
}

</style>
