<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <img src="https://static.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg" alt="..." class="img-responsive">
          <div class="caption">
            <h3>Thumbnail label</h3>
            <p>{{unixtime }}</p>
            <p>Hashed: {{ hashed }}</p>
            <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['collection', 'hashed', 'unixtime']
}
</script>

<style lang="css">
.thumbnail {
  padding: 0 !important;
}
</style>
