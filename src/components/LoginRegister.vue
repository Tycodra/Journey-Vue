<template>
  <div class="hello">
    <div class="user-homepage d-flex flex-column">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item tab" role="presentation">
          <button
            class="nav-link active tab-button"
            id="login-tab"
            data-bs-toggle="tab"
            data-bs-target="#login"
            type="button"
            role="tab"
            aria-controls="login"
            aria-selected="true"
          >
            Login
          </button>
        </li>
        <li class="nav-item tab" role="presentation">
          <button
            class="nav-link tab-button"
            id="register-tab"
            data-bs-toggle="tab"
            data-bs-target="#register"
            type="button"
            role="tab"
            aria-controls="register"
            aria-selected="false"
          >
            Register
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="login"
          role="tabpanel"
          aria-labelledby="login-tab"
        >
          <form id="login-form">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Email Address</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We probably share your email with everyone.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" class="btn btn-primary login-button">
              Login
            </button>
          </form>
        </div>
        <div
          class="tab-pane fade"
          id="register"
          role="tabpanel"
          aria-labelledby="register-tab"
        >
          <form class="row needs-validation register-form" novalidate>
            <div class="col-md-6">
              <label for="validationCustom01" class="form-label"
                >First name</label
              >
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                value="Johanne"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-6">
              <label for="validationCustom02" class="form-label"
                >Last name</label
              >
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                value="Buck"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-7">
              <label for="validationCustomUsername" class="form-label"
                >Username</label
              >
              <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend">@</span>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
            </div>
            <div class="col-md-6">
              <label for="validationCustom03" class="form-label">City</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom03"
                required
              />
              <div class="invalid-feedback">Please provide a valid city.</div>
            </div>
            <div class="col-md-4">
              <label for="validationCustom04" class="form-label">State</label>
              <select class="form-select" id="validationCustom04" required>
                <option selected disabled value=""></option>
                <option>...</option>
              </select>
              <div class="invalid-feedback">Please select a valid state.</div>
            </div>
            <div class="col-md-3">
              <label for="validationCustom05" class="form-label">Zip</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom05"
                required
              />
              <div class="invalid-feedback">Please provide a valid zip.</div>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
                <label class="form-check-label" for="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div class="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-primary register-button" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-homepage {
  background-color: lightgrey;
  border-radius: 0.25rem;
  text-align: start;
  align-self: flex-start;
  margin: 1rem;
}
.tab-pane {
  border-radius: 0.25rem;
  margin: 0.5rem;
}
#login-tab {
  margin-left: 1rem;
}
.tab-content {
  background-color: #9bdeeb;
  border-radius: 0.25rem;
  margin: 1rem;
}
.nav-link {
  color: black;
}
.nav-link.active.tab-button {
  background-color: #9bdeeb;
}
.nav-tabs {
  margin-top: 1rem;
}
.nav-item.tab {
  border-radius: 0.25rem;
}
.login-button,
.register-button {
  color: #fff;
  background-color: grey;
  border-color: darkgrey;
  padding: 0.175rem 0.75rem;
  margin-bottom: 0.5rem;
}
</style>
