<template>
  <div class="ChatRoom">
    <div class="wsMsg">{{ wsMsg }}</div>
    <ul id="messages">
      <template v-for="(message, index) in messages.list" :key="index">
        <li>{{ message }}</li>
      </template>
    </ul>

    <el-form
      ref="wsFormRef"
      :model="wsForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="wsForm"
      size="large"
      :inline="true"
      @submit.prevent
    >
      <el-form-item prop="message" class="message">
        <el-input v-model.number="wsForm.message" />
      </el-form-item>
      <el-form-item class="sumbit">
        <el-button
          type="primary"
          @click="submitForm(wsFormRef)"
          native-type="submit"
        >
          发送
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onUnmounted, onMounted } from "vue";
import type { FormInstance } from "element-plus";
import { io } from "socket.io-client";
import type { Socket } from "socket.io-client";

const wsMsg = ref("");
const wsFormRef = ref<FormInstance>();

const checkMessage = (rule: any, value: string, callback: any) => {
  if (value === "") {
    return callback(new Error("Please input the message"));
  }
  setTimeout(() => {
    callback();
  }, 500);
};

const wsForm = reactive({
  message: "",
});

const rules = reactive({
  message: [{ validator: checkMessage, trigger: "blur" }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid && socket.value) {
      socket.value.emit("chat message", wsForm.message);
      wsFormRef.value?.resetFields();
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const socket = ref<Socket | null>();
const messages = reactive({
  list: [] as string[],
});

onMounted(() => {
  socket.value = io(`https://${window.location.hostname}:8000`);

  socket.value.on("connect", () => {
    wsMsg.value = `用户ID: ${socket.value?.id}`;
    console.log(socket.value?.id);
  });
  socket.value.on("connect_error", () => {
    setTimeout(() => {
      wsMsg.value = "错误信息: Connect_Error";
    }, 2000);
  });
  socket.value.on("disconnect", () => {
    console.log(socket.value?.id); // undefined
  });

  socket.value.on("message", (msg) => {
    messages.list.push(msg);
  });
});

onUnmounted(() => {
  if (socket.value) {
    socket.value.close();
  }
});
</script>
<style lang="less" scoped>
.ChatRoom {
  .wsMsg {
    color: rgb(68, 0, 255);
  }
  .wsForm {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;

    width: 100%;
    padding-left: 28px;

    .message {
      width: 100%;
      flex: auto;
    }
  }
}
</style>
