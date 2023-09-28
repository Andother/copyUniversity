<script setup lang="ts">
import HelloWorld from './views/Home.vue'
import NavHeader from './components/NavHeader.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <div class="container">
      <!-- <header>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <div class="wrapper">
          <HelloWorld msg="You did it!" />
        </div>
      </header> -->



      <NavHeader />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

</style>
