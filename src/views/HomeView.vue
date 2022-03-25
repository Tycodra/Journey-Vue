<template>
  <div class="row home-page-body">
    <div class="col" id="journey-intro">
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

<style scoped>
.home-page-body {
  background-color: #bfe3eb;
  height: 91.45vh;
  /* width: 100vw; */
  align-content: center;
  /* margin-bottom: 40px; */
}

.jumbotron {
  background-color: #b5d9e1;
}

#journey-intro {
  margin: 0.5rem;
}

.lead {
  margin: 0.25rem;
}

.home-page-body,
.row {
  --bs-gutter-x: 0;
  --bs-gutter-y: 0;
  align-items: center;
}

@media only screen and (max-width: 475px) {
  .col {
    width: 95%;
    flex: 1 0 55%;
  }
  .home-page-body {
    height: 100%;
  }
}
</style>
