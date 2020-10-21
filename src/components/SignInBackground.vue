<template>
  <div class="col-lg-8 col-md-6 d-none d-md-block p-0 col">
    <div class="position-relative vh-100">
      <img
        class="vh-100 position-relative vw-img"
        src="../assets/signin-background.png"
      />
      <div class="row text-button d-none d-lg-inline-flex">
        <p class="greenish-blue-text mr-3 mt-2 font-13">
          ¿No tienes una cuenta en Wobiz?
        </p>
        <button class="btn btn-transparent-wobiz btn-outline-reseller">
          Crea tu cuenta
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignInBackground",
};
</script>

<style scoped>
.btn {
  height: 35px;
  border-radius: 3px;
  outline: none;
  font-size: 13px;
  padding: 0 16px;
  min-height: 35px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: none;
  display: inline-block;
  font-weight: 700;
  color: #163a49;
  text-align: center;
  vertical-align: middle;
  background-color: transparent;
  border: 1px solid #163a49;
}
</style>