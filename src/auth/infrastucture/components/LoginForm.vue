<script setup lang="ts">
import { computed, ref } from "vue";
import router from "@/router";
import { login } from "../services";

const email = ref("");
const password = ref("");

// eslint-disable-next-line no-useless-escape
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

const isValidEmail = computed(() => emailRegex.test(email.value));

async function handleLogin() {
  try {
    await login({ email: email.value, password: password.value });
    router.push({ name: "Home" });
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <main class="pt-6 space-y-4">
    <form @submit.prevent="handleLogin">
      <div class="mb-4">
        <label>
          <input
            class="bg-gray-800 p-2 rounded w-4/12"
            type="email"
            name="email"
            placeholder="loremipsum@test.com"
            v-model="email"
          />
        </label>
        <span v-if="!isValidEmail && email" class="mt-3 text-red-500 block"
          >Error: email invalid</span
        >
      </div>
      <div class="mb-4">
        <label>
          <input
            class="bg-gray-800 p-2 rounded w-4/12"
            type="password"
            name="password"
            placeholder="*******"
            v-model="password"
          />
        </label>
      </div>
      <button
        class="bg-green-400 rounded py-2 text-gray-800 w-4/12"
        type="submit"
        :disabled="Boolean(!password && !email)"
      >
        Login
      </button>
    </form>
  </main>
</template>
