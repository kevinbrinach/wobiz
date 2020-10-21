<template>
  <div class="inline-alert mt-3">
    <div class="alert alert-danger font-13" :class="{ bold: bold }">
      {{ msg }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      required: true,
      type: String,
    },
    bold: {
      default: true,
      type: Boolean,
    },
  },
};
</script>

<style>
</style>