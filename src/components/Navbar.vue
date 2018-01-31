<template id="">
  <nav>
    <div class="nav-wrapper">
      <a href="/" class="brand-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/2000px-MarvelLogo.svg.png" 
          alt="Logo">
      </a>
      <ul id="slide-out" class="side-nav">
        <li><div class="user-view">
          <div class="background">
            <img src="">
          </div>
          <a href="#!user"><img class="circle" src=""></a>
          <a href="#!name"><span class="white-text name">John Doe</span></a>
          <a href="#!email"><span class="white-text email">jdandturk@gmail.com</span></a>
        </div></li>
        <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
        <li><a href="#!">Second Link</a></li>
        <li><div class="divider"></div></li>
        <li><a class="subheader">Subheader</a></li>
        <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
      </ul>
      <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
    </div>

  </nav>
</template>

<script> 
export default {

}
</script>

<style scoped>
.brand-logo img {
  height: 50px !important;
  width: 150px !important;
  margin-top: 5px;
  margin-right: 10px;
}

nav {
  background: white !important;
}


</style>
