<template>
  <div class="col-12 col-md-6 col-lg-4 p-0 ml-0 col">
    <div class="box vh-100 white-bg box-shadow">
      <div class="row h-100">
        <div class="h-100 col text-left">
          <logo />
          <sign-in-form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import SignInForm from "./SignInForm.vue";

export default {
  components: {
    Logo,
    SignInForm,
  },
};
</script>

<style>
</style>