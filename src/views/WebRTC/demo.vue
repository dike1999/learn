<template>
  <div class="webRTC">
    <h1>This is an WebRTC page</h1>
    <video width="200" height="200" autoplay id="player" ref="player" />
    <div style="display: flex">
      <div>
        <label>audio Source:</label>
        <el-select
          disabled
          v-model="audioSourceValue"
          class="m-2"
          placeholder="Select"
        >
          <el-option
            v-for="item in devicesInfo.audioSource"
            :key="item.deviceId"
            :label="item.label"
            :value="item.deviceId"
          />
        </el-select>
      </div>

      <div>
        <label>audio Output:</label>
        <el-select
          disabled
          v-model="audioOutputValue"
          class="m-2"
          placeholder="Select"
        >
          <el-option
            v-for="item in devicesInfo.audioOutput"
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
            v-for="item in devicesInfo.videoSource"
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

  <div class="dialog">
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
  </div>
  <canvas width="200" height="200" ref="picture" />
</template>

<script setup lang="ts">
import { onUnmounted, ref, reactive, watch } from "vue";

const centerDialogVisible = ref(true);
const player = ref<HTMLMediaElement | null>(null);
const picture = ref<HTMLCanvasElement | null>(null);

const audioSourceValue = ref();
const audioOutputValue = ref();
const videoSourceValue = ref();
const mediaStreamTrack = ref<MediaStream>({} as MediaStream);
const errMsg = ref("");

const devicesInfo = reactive({
  audioSource: [] as MediaDeviceInfo[],
  audioOutput: [] as MediaDeviceInfo[],
  videoSource: [] as MediaDeviceInfo[],
});

const setMediaStream = (stream: MediaStream) => {
  mediaStreamTrack.value = stream;
  if (player.value) player.value.srcObject = stream;
  return navigator.mediaDevices.enumerateDevices();
};

const setDevicesInfo = (deviceinfo: MediaDeviceInfo[]) => {
  const audioSource: MediaDeviceInfo[] = [];
  const audioOutput: MediaDeviceInfo[] = [];
  const videoSource: MediaDeviceInfo[] = [];
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

    devicesInfo.audioOutput = audioOutput;
    devicesInfo.audioSource = audioSource;
    devicesInfo.videoSource = videoSource;
  });
};

const initVideo = ({
  videoId = undefined,
}: {
  videoId: string | undefined;
}) => {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    errMsg.value = "getUserMedia is not supported";
  } else {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 200,
          height: 200,
          frameRate: 60,
          facingMode: "enviroment",
          deviceId: videoId,
        },
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
        },
      })
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
    mediaStreamTrack.value.getTracks().forEach((track) => {
      track.stop();
    });
  }
};

const handleConfirm = () => {
  centerDialogVisible.value = false;
  initVideo({
    videoId: undefined,
  });
};

const handleSnapshot = () => {
  picture.value
    ?.getContext("2d")
    ?.drawImage(player?.value as HTMLVideoElement, 0, 0, 200, 200);
};

watch(videoSourceValue, async (newVideoId, oldVideoId) => {
  if (oldVideoId) {
    initVideo({
      videoId: newVideoId,
    });
  }
});

onUnmounted(() => {
  if (mediaStreamTrack.value && mediaStreamTrack.value.getTracks) {
    mediaStreamTrack.value.getTracks().forEach((track) => {
      track.stop();
    });
  }
});
</script>
<style scoped></style>
