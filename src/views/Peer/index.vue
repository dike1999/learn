<template>
  <div class="peer">
    <div class="user-info">
      <div class="user-info-id">{{ userId }}</div>
      <el-button type="primary" @click="onCopy">复制</el-button>
    </div>
    <div class="videos">
      <div class="video">
        <h3 class="title">Local</h3>
        <video
          autoplay
          height="300"
          width="300"
          id="localVideo"
          ref="localVideo"
        />
        <h3 class="title">OfferSDP</h3>
        <!-- <el-input
          v-model="offerSDP"
          :autosize="{ minRows: 2, maxRows: 8 }"
          type="textarea"
          placeholder="OfferSDP"
          disabled
        /> -->
      </div>
      <div class="video">
        <h3 class="title">Remote</h3>
        <video
          autoplay
          height="300"
          width="300"
          id="remoteVideo"
          ref="remoteVideo"
        />
        <h3 class="title">AnswerSDP</h3>
        <!-- <el-input
          v-model="answerSDP"
          :autosize="{ minRows: 2, maxRows: 8 }"
          type="textarea"
          placeholder="AnswerSDP"
          disabled
        /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from "vue";
import Peer from "peerjs";
import clipboard from "clipboard";
import { ElMessage } from "element-plus";
import "element-plus/es/components/message/style/css";

const userId = ref<string>(""); // 个人信息
const localVideo = ref<HTMLMediaElement | null>(null); // 本地
const remoteVideo = ref<HTMLMediaElement | null>(null); // 远程

const peer = ref<Peer>(
  new Peer({
    host: "101.201.140.172",
    path: "peer",
    port: 9011,
  })
);
peer.value
  .on("open", (id) => {
    userId.value = id;
  })
  .on("disconnected", () => {
    console.log("disconnected");
  });

const onCopy = () => {
  clipboard.copy(userId.value);
  ElMessage.success("复制成功");
};

onUnmounted(() => {
  peer.value.destroy();
});
</script>

<style scoped lang="less">
.user-info {
  background: #666;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .user-info-id {
    font-size: 24px;
  }
}

.videos {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .video {
    flex: auto;
    .title {
      background-color: #f0c0b8;
      text-align: center;
    }
  }
}
</style>
