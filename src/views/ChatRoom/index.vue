<template>
  <div class="ChatRoom">
    <h1>This is an ChatRoom page</h1>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { io } from "socket.io-client";

onMounted(() => {
  const socket = io("ws://127.0.0.1:8000");
});
</script>
<style scoped></style>
