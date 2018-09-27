<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Victwitter</a>
        <div class="header-right">
          <input type="text" placeholder="username / email">
          <input type="password" placeholder="password">
          <button class="btn-info">Login</button>
        </div>
      </div>
    </nav>
    <hello-world></hello-world>
  </div>
</template>

<script>

  import HelloWorld from "@/components/HelloWorld.vue"
  // import Timeline from "@/components/Timeline.vue"
  export default {
    name: "home",
    components: {
      HelloWorld,
      // Timeline
    }
  }
  
</script>