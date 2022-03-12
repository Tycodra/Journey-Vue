<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div> -->
  <div class="row home-page-body">
    <div class="col">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Journey</h1>
          <p class="lead">
            Welcome to Journey! A place where you can track your hobbies and
            explore new ones! Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore.
          </p>
        </div>
      </div>
    </div>
    <LoginRegister class="col" />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginRegister from "@/components/LoginRegister.vue";

export default {
  name: "HomeView",
  components: {
    LoginRegister,
  },
};
</script>
