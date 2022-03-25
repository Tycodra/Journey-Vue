<template>
  <div class="ProfileInfo">
    <div class="card profile-card">
      <div class="row">
        <div class="col col-user-image">
          <img
            src="/images/photo-cole.jpg"
            class="img-fluid rounded-start profile-pic"
          />
        </div>
        <div class="col">
          <div class="card-body">
            <h5 class="card-title">Tycodra's Journey</h5>
            <p class="card-text">
              <small class="text-muted">Cole Draper</small>
            </p>
          </div>
        </div>
      </div>
    </div>
    <p id="aboutCollapse">
      <button
        class="btn btn-primary about"
        data-bs-target="#about-me-collapse"
        data-bs-toggle="collapse"
        type="button"
        aria-expanded="false"
        aria-controls="collapse-user-details"
      >
        About Me<i class="bi bi-arrows-expand"></i>
      </button>
    </p>
    <div class="collapse show" id="about-me-collapse">
      <div class="row user-description">
        <div class="row user-details">
          <h6 class="user-details-header">Hometown:</h6>
          <div class="col">
            <p>Farmington, Utah</p>
          </div>
        </div>
        <div class="row user-details">
          <h6 class="user-details-header">Favorite Hobbies:</h6>
          <div class="col">
            <p>Rockhounding, Paddleboarding, Hiking</p>
          </div>
        </div>
        <div class="row user-details">
          <h6 class="user-details-header">About me:</h6>
          <div class="col">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileInfo",
  props: {},
};
</script>

<style scoped>
.ProfileInfo {
  margin: 0.75rem;
}
.col-user-image {
  align-self: center;
  width: 30%;
  padding: 0;
}
.profile-card {
  background-color: darkgray;
}

.profile-pic {
  border-radius: 50%;
  border: solid white 4px;
  max-width: 75%;
  margin: 10px;
}
.rounded-start {
  border-bottom-left-radius: 50% !important;
}
#aboutCollapse {
  margin-bottom: 0;
}
.btn-primary,
.btn-primary:focus {
  background-color: gray;
  border-color: rgb(2, 190, 190);
  color: cyan;
  width: 100%;
  margin-top: 0.5rem;
}
.user-description {
  background-color: darkgray;
  border-radius: 0.25rem;
  align-self: center;
  justify-content: center;
}
.user-details {
  background-color: rgb(150, 150, 150);
  border-radius: 0.25rem;
  margin: 0.25rem 0.5rem;
  max-width: 95%;
}

.user-details-header {
  background-color: rgb(128, 128, 128);
  color: aqua;
  border-radius: 0.25rem;
}
.user-details .col {
  padding: none !important;
}

.user-details .col p {
  font-size: 0.8rem;
  color: cyan;
  padding: 0.25rem 0.5rem;
}

@media only screen and (max-width: 475px) {
  .ProfileInfo {
    width: 92%;
  }
}
</style>
