<template>
  <div class="BucketList">
    <div class="row">
      <ProfileInfo class="col-3" />
      <div class="col activity-col">
        <div class="activities-border">
          <h5 id="bucketlist-header">BucketList</h5>
          <div class="accordion" id="activity-accordion">
            <bucket-list-box
              v-for="activity in this.$root.$data.bucketlist"
              v-bind:key="activity"
              v-bind:title="activity"
            ></bucket-list-box>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileInfo from "../components/ProfileInfo.vue";
import BucketListBox from "../components/BucketListBox.vue";

export default {
  name: "userProfileBucketList",
  components: {
    ProfileInfo,
    BucketListBox,
  },
};
</script>

<style scoped>
#bucketlist-header {
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
