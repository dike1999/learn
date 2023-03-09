<template>
  <div class="peer">
    <div class="user-info">
      <div class="user-info-id">{{ userId }}</div>
      <el-button type="primary" @click="onCopy">复制</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from "vue";
import Peer from "peerjs";
import clipboard from "clipboard";
import { ElMessage } from "element-plus";
import "element-plus/es/components/message/style/css";

const userId = ref<string>("");
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
.peer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.user-info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .user-info-id {
    font-size: 24px;
  }
}
</style>
