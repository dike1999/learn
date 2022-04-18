<template>
  <div class="webRTC">
    <h1>This is an WebRTC page</h1>
    <video width="200" height="200" autoplay id="player" ref="player" />
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
    <el-button type="primary" @click="handleSnapshot">截图</el-button>
  </div>
  <div>{{ errMsg }}</div>

  <el-button type="text" @click="centerDialogVisible = true"
    >Click to open the Dialog</el-button
  >
  <el-dialog v-model="centerDialogVisible" title="Warning" width="30%" center>
    <span>请确认是否开启WebRTC功能</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel"> 取消 </el-button>
        <el-button type="primary" @click="handleConfirm"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { onUnmounted, ref, reactive } from "vue";

const centerDialogVisible = ref(true);
const player = ref<HTMLMediaElement | null>(null);

const audioSource = reactive<MediaDeviceInfo[]>([]);
const audioSourceValue = ref();
const audioOutput = reactive<MediaDeviceInfo[]>([]);
const audioOutputValue = ref();
const videoSource = reactive<MediaDeviceInfo[]>([]);
const videoSourceValue = ref();
const mediaStreamTrack = ref<MediaStream>({} as MediaStream);
const errMsg = ref("");

const setMediaStream = (stream: MediaStream) => {
  mediaStreamTrack.value = stream;
  if (player.value) player.value.srcObject = stream;
  return navigator.mediaDevices.enumerateDevices();
};

const setDevicesInfo = (deviceinfo: MediaDeviceInfo[]) => {
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
      if (!videoSourceValue.value) {
        videoSourceValue.value = device.deviceId;
      }
    }
  });
};

const initVideo = () => {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    errMsg.value = "getUserMedia is not supported";
  } else {
    const constraints = {
      video: {
        width: 200,
        height: 200,
        frameRate: 60,
        facingMode: "enviroment",
      },
      audio: {
        noiseSuppression: true,
        echoCancellation: true,
      },
    };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(setMediaStream)
      .then(setDevicesInfo)
      .catch((err) => {
        errMsg.value = err;
      });
  }
};

const handleCancel = () => {
  centerDialogVisible.value = false;
  if (mediaStreamTrack.value.getTracks) {
    mediaStreamTrack.value.getTracks()[0].stop();
    mediaStreamTrack.value.getTracks()[1].stop();
  }
};

const handleConfirm = () => {
  centerDialogVisible.value = false;
  initVideo();
};

const handleSnapshot = () => {
  console.log("TODO: 截图");
};

onUnmounted(() => {
  if (mediaStreamTrack.value) {
    mediaStreamTrack.value.getTracks()[0].stop();
    mediaStreamTrack.value.getTracks()[1].stop();
  }
});
</script>
<style scoped></style>
