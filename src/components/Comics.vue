<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-4" v-for="comic in comics">
        <div class="thumbnail">
          <img src="https://static.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg" alt="..." class="img-responsive">
          <div class="caption">
            <h3>Thumbnail </h3>
            <p>{{ comic.results.series.name }}</p>
            <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['collection', 'hashed', 'unixtime', 'comics']
}
</script>

<style lang="css">
.thumbnail {
  padding: 0 !important;
}
</style>
