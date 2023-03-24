<script setup lang="ts">
import type { IRegister } from "@/auth/domain/models";
import { reactive, ref } from "vue";
import { registerUser } from "../services";

const initialState: IRegister = {
  name: "",
  lastName: "",
  email: "",
  password: "",
};

const repassword = ref("");
const isRegistered = ref(false);
const registerInfo: IRegister = reactive({ ...initialState });

async function handleRegister() {
  try {
    if (registerInfo.password !== repassword.value)
      throw new Error("The password field and re-password field not are equal");
    await registerUser(registerInfo);
    isRegistered.value = true;
  } catch (error) {
    console.error(error);
  }
}

function resetRegister() {
  Object.keys(registerInfo).forEach((key: string) => {
    registerInfo[key] = initialState[key];
  });
  repassword.value = "";
  isRegistered.value = false;
}
</script>

<template>
  <main class="pt-6 space-y-4">
    <form @submit.prevent="handleRegister" v-if="!isRegistered">
      <div class="mb-3">
        <label>
          <input
            type="text"
            class="custom-input"
            placeholder="Name"
            v-model="registerInfo.name"
          />
        </label>
      </div>
      <div class="mb-3">
        <label>
          <input
            type="text"
            class="custom-input"
            placeholder="Last Name"
            v-model="registerInfo.lastName"
          />
        </label>
      </div>
      <div class="mb-3">
        <label>
          <input
            type="text"
            class="custom-input"
            placeholder="Email"
            v-model="registerInfo.email"
          />
        </label>
      </div>
      <div class="mb-3">
        <label>
          <input
            type="password"
            class="custom-input"
            placeholder="Password"
            v-model="registerInfo.password"
          />
        </label>
      </div>
      <div class="mb-3">
        <label>
          <input
            type="password"
            class="custom-input"
            placeholder="Re-password"
            v-model="repassword"
          />
        </label>
      </div>
      <button
        class="bg-green-400 rounded py-2 text-gray-800 w-4/12"
        type="submit"
      >
        Register
      </button>
    </form>
    <section v-else>
      <h5 class="text-gray-500 w-full text-xl">
        Hello user, if you are here is because you have successfully registered,
        congratulations! 🎉🎉
      </h5>
      <p @click="resetRegister" class="text-green-400 cursor-pointer">
        Register another user?
      </p>
    </section>
  </main>
</template>
