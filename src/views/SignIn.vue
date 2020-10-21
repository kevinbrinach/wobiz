<template>
  <div class="row mr-0 auth">
    <sign-in-left-side />
    <sign-in-background />
  </div>
</template>

<script>
import SignInBackground from "../components/SignInBackground.vue";
import SignInLeftSide from "../components/SignInLeftSide.vue";

export default {
  components: {
    SignInLeftSide,
    SignInBackground,
  },
};
</script>

<style>
</style>