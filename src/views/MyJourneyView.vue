<template>
  <div class="MyJourney">
    <div class="row">
      <ProfileInfo class="col-3" />
      <div class="col activity-col">
        <div class="activities-border">
          <div class="row">
            <h5 id="activity-header">Hobbies</h5>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#addActivity"
            >
              Add an activity
            </button>
            <div
              class="modal fade"
              id="addActivity"
              tabindex="-1"
              aria-labelledby="addActivityLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="addActivityLabel">
                      Add an activity!
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div class="form">
                      <input v-model="title" placeholder="Title" />
                      <p></p>
                      <textarea
                        v-model="description"
                        placeholder="Description"
                      />
                      <p></p>
                      <input type="file" name="photo" @change="fileChanged" />
                      <button @click="upload">Upload</button>
                    </div>
                    <div class="upload" v-if="addActivity">
                      <h2>{{ addActivity.title }}</h2>
                      <img :src="addActivity.path" />
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion" id="activity-accordion">
            <activity-box
              v-for="activity in activities"
              v-bind:key="activity.activity"
              v-bind:title="activity.activity"
              v-bind:activities="activity.activities"
            ></activity-box>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProfileInfo from "../components/ProfileInfo.vue";
import ActivityBox from "../components/ActivityBox.vue";

export default {
  name: "userProfileJourney",
  data() {
    return {
      activities: [],
      title: "",
      description: "",
      file: null,
      addActivity: null,
      findTitle: "",
      findActivity: null,
    };
  },
  components: {
    ProfileInfo,
    ActivityBox,
  },
  created() {
    this.getActivities();
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0];
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append("photo", this.file, this.file.name);
        let r1 = await axios.post("/api/photos", formData);
        let r2 = await axios.post("/api/activities", {
          title: this.title,
          description: this.description,
          path: r1.data.path,
        });
        this.addActivity = r2.data;
        this.getActivities();
      } catch (error) {
        console.log(error);
      }
    },
    async getActivities() {
      try {
        let response = await axios.get("/api/activities");
        this.activities = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.profile-pic {
  border-radius: 50%;
  border: solid white 4px;
  max-width: 75%;
  margin: 10px;
}
#activity-header {
  padding-top: 5px;
}
.activities-border {
  background-color: rgb(18, 247, 228);
  border-radius: 0.25rem;
  margin-right: 1rem;
  margin-top: 1rem;
}
.activity-col {
  width: 71%;
}

@media only screen and (max-width: 475px) {
  .activities-border {
    margin: 0.75rem;
  }
}
</style>
