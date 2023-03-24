<script setup lang="ts">
import router from "@/router";

function handleLogout() {
  localStorage.removeItem("isAuthenticated");
  router.push({ name: "Login" });
}
</script>

<template>
  <main>
    <h1 class="text-7xl text-green-500 w-full mb-5">
      Welcome to the Home page
    </h1>
    <h5 class="text-gray-500 w-full text-xl">
      Hello user, if you are here is because you have successfully
      authenticated, congratulations! 🎉🎉
    </h5>
    <button
      @click="handleLogout"
      class="bg-green-400 rounded py-2 text-gray-800 w-4/12 mt-5"
    >
      Logout
    </button>
  </main>
</template>
