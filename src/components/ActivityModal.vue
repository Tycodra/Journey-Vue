<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header"
          ><strong> {{ modalType }} </strong>
        </slot>
        <button type="button" class="btn-close" @click="close">x</button>
      </header>

      <section class="modal-body">
        <slot name="body">
          <div class="form row">
            <div class="col">
              <h6>Activity Type</h6>
              <input
                class="activityType"
                v-model="activityType"
                placeholder="Type"
              />
              <div class="suggestions" v-if="activityTypes.length > 0">
                <div
                  class="suggestion"
                  v-for="activity in suggestTypes"
                  :key="activity"
                  @click="selectActivityType(activity)"
                >
                  {{ activity }}
                </div>
              </div>
            </div>
            <div class="col">
              <h6>Title</h6>
              <input
                class="activityTitle"
                v-model="activityTitle"
                placeholder="Title"
              />
              <h6>Description</h6>
              <textarea
                class="activityDescription"
                v-model="activityDescription"
                placeholder="Description"
              />
            </div>
            <div v-if="isEditActivity == false">
              <p></p>
              <input
                class="upload-photo"
                type="file"
                name="photo"
                @change="fileChanged"
              />
            </div>
            <!-- <button @click="upload">Create</button> -->
          </div>
          <!-- <div class="upload" v-if="addedActivity">
            <h2>{{ addedActivity.title }}</h2>
            <img :src="addedActivity.path" />
          </div> -->
        </slot>
      </section>

      <footer class="modal-footer">
        <button
          type="button"
          class="btn-green"
          v-if="isEditActivity"
          @click="edit"
        >
          Edit
        </button>
        <button type="button" class="btn-green" v-else @click="add">Add</button>
        <button type="button" class="btn-green" @click="close">Cancel</button>
      </footer>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "activityModal",
  props: {
    isEditActivity: Boolean,
    activityTypes: [],
    activity: {},
  },
  data() {
    return {
      modalType: "",
      activityType: "",
      activityTitle: "",
      activityDescription: "",
      file: null,
      addedActivity: null,
      editedActivity: null,
    };
  },
  created() {
    this.setupModal();
  },
  computed: {
    suggestTypes() {
      if (this.activityTypes.length > 0) {
        let activities = this.activityTypes.filter((activity) =>
          activity.toLowerCase().startsWith(this.activityType.toLowerCase())
        );
        return activities.sort();
      } else {
        return [];
      }
    },
  },
  methods: {
    setupModal() {
      if (this.isEditActivity === true) {
        this.modalType = "Edit activity";
        this.activityType = this.activity.type;
        this.activityTitle = this.activity.title;
        this.activityDescription = this.activity.description;
      } else {
        this.modalType = "Add activity";
      }
    },
    selectActivityType(activity) {
      this.activityType = activity;
    },
    fileChanged(event) {
      this.file = event.target.files[0];
    },
    async add() {
      try {
        const formData = new FormData();
        formData.append("photo", this.file, this.file.name);
        let r1 = await axios.post("/api/photos", formData);
        await axios.post("/api/activities", {
          type: this.activityType,
          title: this.activityTitle,
          description: this.activityDescription,
          path: r1.data.path,
        });
        this.$emit("complete");
      } catch (error) {
        console.log(error);
      }
    },
    async edit() {
      try {
        await axios.put("/api/activities/" + this.activity._id, {
          type: this.activityType,
          title: this.activityTitle,
          description: this.activityDescription,
        });
        this.$emit("complete");
      } catch (error) {
        console.log(error);
      }
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style scoped>
.col {
  align-items: flex-start;
  padding: 0 1rem;
}
.suggestions {
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin-top: 1rem;
  height: 8rem;
  border: 1px solid gray;
}

h6 {
  margin: 0.5rem !important;
}
.activityType {
  width: inherit;
}
.activityTitle {
  width: inherit;
}
.activityDescription {
  width: inherit;
  height: 8rem;
}
.upload-photo {
  float: left;
  margin: 1rem;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: fixed;
  width: 50%;
  max-width: 600px;
  height: 60%;
  max-height: 430px;
  top: 20%;
  left: 25%;
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 0.5rem;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: rgb(34 164 164);
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #318d7c;
  background: transparent;
}

.btn-green {
  color: white;
  font-weight: 600;
  background: #3dab97;
  border: 2px solid #46c0aa;
  border-radius: 2px;
}

@media only screen and (max-width: 475px) {
  .form {
    display: flex;
    flex-direction: column;
  }
  .modal {
    position: fixed;
    width: 80%;
    height: 80%;
    top: 10%;
    left: 10%;
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    display: flex;
    flex-direction: column;
  }
}
</style>
