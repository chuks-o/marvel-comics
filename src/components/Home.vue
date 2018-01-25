<template lang="">
  <comics
    :comics="comics">
  </comics>
</template>

<script>
import Comics from './Comics'
var md5 = require('md5')

export default {
  components: {
    'comics': Comics
  },

  data () {
    return {
      comics: [],
      reversed: [],
      collection: {
        public_key: '232de3cd47562ba3dce8a33d7118ab13',
        private_key: 'a6caf73e1c2ee99586459bef36ae464e02efd6d4'
      }
    }
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

  created () {
    this.getComic()
  },

  methods: {
    getComic () {
      window.axios.get('https://gateway.marvel.com/v1/public/comics', {
        params: {
          apikey: this.collection.public_key,
          hash: this.hashed
        }
      })
        .then(response => {
          this.reversed = response.data.data.results
          this.comics = this.reversed.reverse()
        }).catch(e => {
          console.log(e)
        })
    }
  }

}
</script>

<style lang="css">

</style>
