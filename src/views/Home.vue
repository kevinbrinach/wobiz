<template>
  <div>This will redirect you to /signin</div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    this.$router.push({ name: "SignIn" });
  },
};
</script>
