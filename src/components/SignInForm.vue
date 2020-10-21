<template>
  <div>
    <h2 class="greenish-blue-text mt-5 mb-4 bolder font-26">
      Ingresa a tu cuenta
    </h2>
    <error-message :msg="errorMessage" :bold="false" v-if="errorMessage" />
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label class="darkgray-text bold font-13" for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Ej: usuario@mail.com"
          v-model.lazy="email"
        />
      </div>
      <error-message msg="Necesitamos tu email." v-if="errorEmail" />
      <div class="form-group">
        <label class="darkgray-text bold font-13" for="password"
          >Contraseña</label
        >
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Escribe tu contraseña"
          v-model="password"
        />
      </div>
      <error-message msg="Necesitamos tu contraseña." v-if="errorPass" />
      <div class="pl-0 mt-2 mb-2 link-decoration">
        <a class="forgot-pass">¿Olvidaste tu contraseña?</a>
      </div>
      <button
        class="btn btn-action-2 btn-lg btn-block mt-3 btn-login font-13"
        type="submit"
      >
        Ingresar a mi cuenta
      </button>
    </form>
  </div>
</template>

<script>
import ErrorMessage from "./ErrorMessage.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SignInForm",
  components: {
    ErrorMessage,
  },
  data() {
    return {
      email: "",
      password: "",
      errorEmail: false,
      errorPass: false,
    };
  },
  computed: {
    ...mapGetters("user", ["errorMessage"]),
  },
  methods: {
    ...mapActions("user", ["Login"]),
    handleSubmit() {
      if (this.email === "") {
        this.errorEmail = true;
      }
      if (this.password === "" || this.password.length < 6) {
        this.errorPass = true;
      }
      if (this.errorEmail || this.errorPass) {
        return;
      }
      // send request to the api
      this.Login({
        Username: this.email,
        Password: this.password,
      });
    },
  },
};
</script>