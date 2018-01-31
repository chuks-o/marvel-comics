<template>
<div>
    <h5 class="header" v-show="!loading">Characters</h5>
    <a href="/" v-show="!loading">Return back</a>

    <div class="container">
      <div v-if="!comicface">
        <a href="/">Return back</a>
        <h3 id="message">No characters for this comic</h3>
      </div>

      <div v-else 
        class="row" 
        v-for="face in comicface" 
        :key="face.id">
        <div class="col s12 m6 offset-m3">
          <div class="card">
            <div class="card-image">
              <img :src="face.thumbnail.path + '.' + face.thumbnail.extension"/>      
              <span class="card-title">{{ face.name }}</span>
            </div>
            <div class="card-content">
              <p>{{ face.description }}</p>
            </div>
      
          </div>
        </div>
      </div>

      
    <div v-if="loading" id="loading-spinner">
      <spinner></spinner>
    </div>

    </div>
</div>     
      
</template>

<script>
import { EventBus } from '../main.js'
import Spinner from 'vue-simple-spinner'
var md5 = require('md5')

export default {
  props: ['comic'],
  components: {
    'spinner': Spinner
  },

  data () {
      return {
        comicface: [],
        loading: false,

          collection: {
              public_key: '232de3cd47562ba3dce8a33d7118ab13',
              private_key: 'a6caf73e1c2ee99586459bef36ae464e02efd6d4'
          }
      }
  },

  created () {
      this.showComics()
  },

  computed: {
    hashed () {
      let concat = this.unixtime + this.collection.public_key + this.collection.private_key
      return md5(concat)
    },

    unixtime () {
      let datenow = Date.now()
      var ts = Math.floor(datenow / 1000)
      return ts
    }
  },
  
  methods: {
    showComics () {
      this.loading = true
        window.axios.get("https://gateway.marvel.com/v1/public/comics/" + this.comic + "/characters", 
        {
              params : {
                  apikey: this.collection.public_key,
                  hash: this.hashed
              }
        })
          .then(response => {
            this.loading = false
            this.comicface =  response.data.data.results
          })
          .catch(err => {
            console.log(err);
          });

    }
  }
}
</script>

<style scoped>
.card {
  border: 3px solid white !important;
}

#message {
  color:red !important;
}

.header {
  color:white;
}

#loading-spinner {
  margin-top: 170px !important;
}

</style>
