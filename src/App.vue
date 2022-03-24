<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/" exact class="navbar-brand">Journey</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <router-link
              tag="li"
              to="/"
              exact
              class="nav-item nav-link"
              exact-active-class="active"
              >Home</router-link
            >
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profile
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link
                  tag="li"
                  to="/myJourney"
                  class="dropdown-item"
                  active-class="active"
                  >My Journey</router-link
                >
                <li><hr class="dropdown-divider" /></li>
                <router-link
                  tag="li"
                  to="/bucketList"
                  class="dropdown-item"
                  active-class="active"
                  >My Bucket List</router-link
                >
              </ul>
            </li>
          </ul>
          <p class="nav-item ms-auto">
            <router-link
              to="/explore"
              class="nav-link"
              exact-active-class="active"
              >Explore</router-link
            >
          </p>
        </div>
      </div>
    </nav>
    <router-view />
    <div class="clear"></div>
    <footer class="navbar fixed-bottom navbar-dark bg-dark">
      <div class="navbar-nav">
        <a
          class="nav-link github-link"
          href="https://github.com/Tycodra/Journey-Vue.git"
          >Created by the lovely Cole Draper</a
        >
      </div>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.row {
  --bs-gutter-x: 0 !important;
  --bs-gutter-y: 0 !important;
}
.bg-dark {
  background-color: rgb(95, 95, 95) !important;
}

.navbar {
  padding: none;
}

.navbar-dark .navbar-nav .nav-link:focus,
.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .nav-link:hover {
  color: rgb(9, 212, 212);
  background-color: rgb(114, 114, 114);
  border-radius: 0.25rem;
}

.navbar-dark .navbar-nav .nav-link,
.navbar-dark .nav-link {
  color: rgb(6, 250, 250);
  /* padding: 0.5rem 0.5rem; */
}

.nav-item .active,
li.active {
  background-color: rgb(114, 114, 114);
  color: rgb(0, 189, 189) !important;
}
.active router-link:hover {
  color: rgb(6, 250, 169);
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 0.1rem;
}

.nav-item {
  border-radius: 0.25rem;
}

.nav-item ul .li:hover {
  background-color: rgb(114, 114, 114);
}

p,
.nav-item {
  margin-block-end: 0;
}

.dropdown-menu {
  background-color: rgb(95, 95, 95);
}
.dropdown-item {
  color: rgb(9, 212, 212);
}
a.dropdown-item:hover {
  background-color: #727272;
  color: rgb(6, 250, 250);
}
.dropdown-item:focus,
.dropdown-item:hover {
  background-color: rgb(114, 114, 114);
  color: rgb(6, 250, 250);
}

nav a.router-link-exact-active {
  color: #42b983;
}

.fixed-bottom {
  height: 40px;
}

.github-link {
  padding: 0;
  margin-left: 0.5rem;
}
</style>
