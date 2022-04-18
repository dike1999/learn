<template>
  <div class="webRTC">
    <h1>This is an WebRTC page</h1>
    <video autoplay id="player" ref="player" />
    <div>{{ errMsg }}</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const player = ref<HTMLMediaElement | null>(null);
const errMsg = ref("");

onMounted(() => {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    errMsg.value = "getUserMedia is not supported";
  } else {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (player.value) player.value.srcObject = stream;
      })
      .catch((err) => {
        errMsg.value = err;
      });
  }
});
</script>
<style scoped></style>
