<template>
  <div class="WebRTC">
    <h1>This is an WebRTC page</h1>
    <div class="videos">
      <video
        autoplay
        height="300"
        width="300"
        id="localVideo"
        ref="localVideo"
      />
      <video
        autoplay
        height="300"
        width="300"
        id="remoteVideo"
        ref="remoteVideo"
      />
    </div>
    <div class="buttons">
      <el-button
        :disabled="isDisable.start"
        type="primary"
        @click="handleStart"
        class="btn"
        round
        size="large"
      >
        Start
      </el-button>
      <el-button
        :disabled="isDisable.call"
        type="primary"
        @click="handleCall"
        class="btn"
        round
        size="large"
      >
        Call
      </el-button>
      <el-button
        :disabled="isDisable.hangup"
        type="primary"
        @click="handleHangUp"
        class="btn"
        round
        size="large"
      >
        HangUp
      </el-button>
    </div>
  </div>
  <div class="errMsg">{{ errMsg }}</div>
</template>

<script setup lang="ts">
import { onUnmounted, ref, reactive } from "vue";

const localVideo = ref<HTMLMediaElement | null>(null);
const remoteVideo = ref<HTMLMediaElement | null>(null);
const loaclMediaStream = ref<MediaStream>({} as MediaStream);
const connection1 = ref<RTCPeerConnection | null>();
const connection2 = ref<RTCPeerConnection | null>();

const errMsg = ref("");

// 页面交互相关
const isDisable = reactive({
  start: false,
  call: true,
  hangup: true,
});

const handleStart = () => {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    errMsg.value = "The getUserMedia is not supported!";
    return;
  }
  navigator.mediaDevices
    .getUserMedia({
      video: {
        width: 200,
        height: 200,
        frameRate: 60,
        facingMode: "enviroment",
      },
      audio: false,
    })
    .then((stream: MediaStream) => {
      loaclMediaStream.value = stream;
      if (localVideo.value) localVideo.value.srcObject = stream;
      isDisable.start = true;
      isDisable.call = false;
      isDisable.hangup = false;
    })
    .catch((err) => {
      errMsg.value = err;
    });
};

const getAnswer = (desc: any) => {
  console.log("remote", desc);
  connection2.value?.setLocalDescription(desc);
  // send desc to signal
  // receive desc from signal
  connection1.value?.setRemoteDescription(desc);
};

const getLocalDescription = (desc: any) => {
  connection1.value?.setLocalDescription(desc);
  console.log("local", desc);
  // send desc to signal
  // receive desc from signal
  connection2.value?.setRemoteDescription(desc);
  connection2.value
    ?.createAnswer()
    .then(getAnswer)
    .catch((err) => {
      errMsg.value = err;
    });
};

const handleCall = () => {
  connection1.value = new RTCPeerConnection();
  connection1.value.onicecandidate = (e: any) => {
    if (connection2.value) connection2.value.addIceCandidate(e.candidate);
  };

  connection2.value = new RTCPeerConnection();
  connection2.value.onicecandidate = (e: any) => {
    if (connection1.value) connection1.value.addIceCandidate(e.candidate);
  };
  connection2.value.ontrack = (e) => {
    if (remoteVideo.value) remoteVideo.value.srcObject = e.streams[0];
  };
  loaclMediaStream.value.getTracks().forEach((track) => {
    connection1.value?.addTrack(track, loaclMediaStream.value);
  });

  connection1.value
    .createOffer({
      offerToReceiveAudio: false,
      offerToReceiveVideo: true,
    })
    .then(getLocalDescription)
    .catch((err) => {
      errMsg.value = err;
    });
  isDisable.call = true;
};

const handleHangUp = () => {
  if (loaclMediaStream.value && loaclMediaStream.value.getTracks) {
    loaclMediaStream.value.getTracks().forEach((track) => {
      track.stop();
    });
  }

  connection1.value?.close();
  connection2.value?.close();
  connection1.value = null;
  connection2.value = null;
  if (localVideo.value) localVideo.value.srcObject = null;
  if (remoteVideo.value) remoteVideo.value.srcObject = null;
  isDisable.start = false;
  isDisable.call = true;
  isDisable.hangup = true;
};

onUnmounted(() => {
  if (loaclMediaStream.value && loaclMediaStream.value.getTracks) {
    loaclMediaStream.value.getTracks().forEach((track) => {
      track.stop();
    });
  }
});
</script>
<style scoped lang="less">
.WebRTC {
  .videos {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .buttons {
    display: flex;
    justify-content: space-around;
    .btn {
      margin: 0 25px;
      width: 100%;
    }
  }
}
</style>
