<template>
  <div class="webRTC">
    <h1>This is an WebRTC page</h1>
    <video autoplay id="player" ref="player" />
    <div style="display: flex">
      <div>
        <label>audio Source:</label>
        <el-select v-model="audioSourceValue" class="m-2" placeholder="Select">
          <el-option
            v-for="item in audioSource"
            :key="item.deviceId"
            :label="item.label"
            :value="item.deviceId"
          />
        </el-select>
      </div>

      <div>
        <label>audio Output:</label>
        <el-select v-model="audioOutputValue" class="m-2" placeholder="Select">
          <el-option
            v-for="item in audioOutput"
            :key="item.deviceId"
            :label="item.label"
            :value="item.deviceId"
          />
        </el-select>
      </div>

      <div>
        <label>video Source:</label>
        <el-select v-model="videoSourceValue" class="m-2" placeholder="Select">
          <el-option
            v-for="item in videoSource"
            :key="item.deviceId"
            :label="item.label"
            :value="item.deviceId"
          />
        </el-select>
      </div>
    </div>
  </div>
  <div>{{ errMsg }}</div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";

const player = ref<HTMLMediaElement | null>(null);
const audioSource = reactive<MediaDeviceInfo[]>([]);
const audioSourceValue = ref("");
const audioOutput = reactive<MediaDeviceInfo[]>([]);
const audioOutputValue = ref("");
const videoSource = reactive<MediaDeviceInfo[]>([]);
const videoSourceValue = ref("");
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
            if (device.deviceId === "default") {
              audioSourceValue.value = device.deviceId;
            }
          } else if (device.kind === "audiooutput") {
            audioOutput.push(device);
            if (device.deviceId === "default") {
              audioOutputValue.value = device.deviceId;
            }
          } else if (device.kind === "videoinput") {
            videoSource.push(device);
            if (videoSourceValue.value === "") {
              videoSourceValue.value = device.deviceId;
            }
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
