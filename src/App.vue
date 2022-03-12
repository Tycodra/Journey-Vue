<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Journey</router-link>
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
            <li class="nav-item active">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
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
                <li>
                  <router-link to="/myJourney" class="dropdown-item"
                    >My Journey</router-link
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <router-link to="/bucketList" class="dropdown-item"
                    >My Bucket List</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
          <p class="nav-item ms-auto">
            <router-link to="/explore" class="nav-link">Explore</router-link>
          </p>
        </div>
      </div>
    </nav>
    <router-view />
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

.bg-dark {
  background-color: rgb(95, 95, 95) !important;
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
  padding: 0.5rem 0.5rem;
}

.nav-item.active {
  background-color: rgb(114, 114, 114);
  color: rgb(9, 212, 212) !important;
}
.active a:hover {
  color: rgb(6, 250, 169);
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 0.1rem;
}

.nav-item {
  border-radius: 0.25rem;
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
.dropdown-item:focus {
  background-color: rgb(196, 195, 195);
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
