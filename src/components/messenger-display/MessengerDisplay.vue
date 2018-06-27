<template >
    <div class="messenger-display">
        <div v-for="(message, index) in messages" :key="index" :class="{'messenger__message': true, 'you': message.id === socketId}">
            <span class="message__date">{{message.date | date('HH:MM')}} - </span>
            <span class="message__author">{{message.id === socketId ? "Vous" : message.author}} dit:</span>
            <div class="message__content">{{message.content}}</div>
        </div>  
    </div>
</template>
    
<script>
import { date } from "@/filters/date.js";
import { socket } from "@/utils/socket.js";

export default {
  name: "messenger-display",
  filters: {
    date
  },
  props: {
    messages: {
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
.messenger-display {
  height: 500px;
  // background-color: rgb(66, 66, 66);
  overflow-y: auto;
  padding: 0 15px;
}
.messenger__message {
  text-align: left;
}
.you {
  text-align: right !important;
  color: green;
}
</style>
