<template>
    <div id='listUser'>
        <div v-for="(user, index) in messages" :key="index">
            <span class="list__name">{{user.name}}</span>
        </div>
    </div>
</template>

<script>
import { socket } from "@/utils/socket.js";
export default {
  name: "listUser",
  props: {
    users: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      socketId: socket.id
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
