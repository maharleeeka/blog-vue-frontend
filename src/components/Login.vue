<script setup lang="ts">
import { useAuthStore } from "@/stores/auth.store";
import { useRouter } from "vue-router";
import Input from "./atoms/Input/InputComponent.vue";
import Button from "./atoms/Button/ButtonComponent.vue";
import { reactive } from "vue";
import useAuth from "../composables/auth";

const router = useRouter();
const { login, accessToken } = useAuth();
const authStore = useAuthStore();
const { setAccessToken } = authStore;

const form = reactive({
  email: "",
  password: "",
});

console.log({ accessToken: accessToken.value });
const loginUser = async () => {
  try {
    await login({ ...form });
    setAccessToken(accessToken.value);
    router.push("/dashboard");
  } catch (error) {
    console.log({ error });
  }
};
</script>

<template>
  <form @submit.prevent="loginUser" class="form-wrapper">
    <Input input-label="Email" type="email" v-model="form.email" />
    <Input input-label="Password" type="password" v-model="form.password" />
    <Button button-label="Login" class="btn login-button" type="submit" />
  </form>
</template>

<style scoped>
.form-wrapper {
  display: flex;
  flex-direction: column;
}
.login-button {
  margin-top: 1em;
  background-color: hsl(160deg 100% 37%);
  color: #fff;
}
</style>
