<template>
  <div class="webRTC">
    <h1>This is an WebRTC page</h1>
    <video autoplay id="player" ref="player" />
    <div style="display: flex">
      <div>
        <label>audio Source:</label>
        <select id="audioSource">
          <option
            v-for="item in audioSource"
            :value="item.deviceId"
            :text="item.label"
            :key="item.deviceId"
          />
        </select>
      </div>

      <div>
        <label>audio Output:</label>
        <select id="audioOutput">
          <option
            v-for="item in audioOutput"
            :value="item.deviceId"
            :text="item.label"
            :key="item.deviceId"
          />
        </select>
      </div>

      <div>
        <label>video Source:</label>
        <select id="videoSource">
          <option
            v-for="item in videoSource"
            :value="item.deviceId"
            :text="item.label"
            :key="item.deviceId"
          />
        </select>
      </div>
    </div>
  </div>
  <div>{{ errMsg }}</div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";

const player = ref<HTMLMediaElement | null>(null);
const audioSource = reactive<MediaDeviceInfo[]>([]);
const audioOutput = reactive<MediaDeviceInfo[]>([]);
const videoSource = reactive<MediaDeviceInfo[]>([]);
const errMsg = ref("");

onMounted(() => {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    errMsg.value = "getUserMedia is not supported";
  } else {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (player.value) player.value.srcObject = stream;
        return navigator.mediaDevices.enumerateDevices();
      })
      .then((deviceinfo) => {
        deviceinfo.forEach((device) => {
          if (device.kind === "audioinput") {
            audioSource.push(device);
          } else if (device.kind === "audiooutput") {
            audioOutput.push(device);
          } else if (device.kind === "videoinput") {
            videoSource.push(device);
          }
        });
      })
      .catch((err) => {
        errMsg.value = err;
      });
  }
});
</script>
<style scoped></style>
