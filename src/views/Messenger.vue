<template>
  <div id="messenger">
    <div class ="messenger-content">
      <messenger-display :messages="listMessages"></messenger-display>
      <hr />
      <messenger-input @message="sendMessageToSocket"></messenger-input>
      <messenger-list-user :messages="listMessages"></messenger-list-user>
    </div>
  </div>
</template>
<!-- =========================================================== -->
<script>
import MessengerDisplay from "../components/messenger-display/MessengerDisplay";
import MessengerInput from "../components/messenger-input/MessengerInput";
import MessengerListUser from "../components/messenger-list-user/messengerListUser";
import { socket } from "../utils/socket.js";
import * as axios from "axios";

export default {
  name: "messenger",
  beforeRouteEnter(to, from, next) {
    console.log("socket.id", socket.id);
    if (!socket.id) {
      next("/");
    }

    axios.get("/users/islogged?id=" + socket.id).then(({ data }) => {
      console.log("is", data);
      if (data) {
        next();
      } else {
        next("/");
      }
    });
  },
  components: {
    MessengerDisplay,
    MessengerInput,
    MessengerListUser
  },

  data: () => ({
    listMessages: []
  }),
  methods: {
    sendMessageToSocket(message) {
      console.log("======", message);
      socket.emit("message", {
        content: message
      });
    }
  },
  mounted() {
    socket.on("message", msg => {
      console.log(socket.id);
      this.listMessages.push(msg);
    });
  }
};
</script>
<!-- =========================================================== -->
<style lang="scss">
.message {
  padding: 10px;
  height: 500px;
}
.messenger-content {
  padding: 10px;
  width: 70%;
  margin: auto;
}
</style>
