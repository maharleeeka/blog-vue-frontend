<script setup lang="ts">
import { useAuthStore } from "@/stores/auth.store";
import { useRouter } from "vue-router";
import Input from "./atoms/Input/InputComponent.vue";
import Button from "./atoms/Button/ButtonComponent.vue";
import { reactive } from "vue";
import useAuth from "../composables/auth";

const router = useRouter();
const { register, accessToken } = useAuth();
const authStore = useAuthStore();
const { setAccessToken } = authStore;

const form = reactive({
  name: "",
  email: "",
  password: "",
  c_password: "",
});

const registerUser = async () => {
  try {
    await register({ ...form });
    setAccessToken(accessToken.value);
    router.push("dashboard");
  } catch (error) {
    console.log({ error });
  }
};
</script>

<template>
  <form @submit.prevent="registerUser" class="form-wrapper">
    <Input input-label="Name" v-model="form.name" />
    <Input input-label="Email" type="email" v-model="form.email" />
    <Input input-label="Password" type="password" v-model="form.password" />
    <Input
      input-label="Confirm Password"
      type="password"
      v-model="form.c_password"
    />
    <Button button-label="Register" class="btn register-button" type="submit" />
  </form>
</template>

<style scoped>
.form-wrapper {
  display: flex;
  flex-direction: column;
}
.register-button {
  margin-top: 1em;
  background-color: hsl(160deg 100% 37%);
  color: #fff;
}
</style>
