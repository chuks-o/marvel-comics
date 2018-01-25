<template lang="html">
  <div class="container">
    <div class="row">

      <div class="col s12 m6" v-for="comic in comics">
        <div class="card hoverable">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator"
            :src="comic.thumbnail.path + '.' + comic.thumbnail.extension"
            alt="...">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              <!-- {{ comic.title }} -->
              <i class="material-icons right">icon</i>
            </span>
            <p><a href="#">Link</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              {{ comic.title }}
              <i class="material-icons right">X</i>
            </span>
            <p>{{ comic.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="loading">
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
.row {
  margin-top: 30px !important;
}
img {
  height: 300px !important;
  max-height: 300px !important;
}
</style>
