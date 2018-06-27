<template>
  <div class="home">
    <img src="../assets/logo.png">
    <div class="home__input">
      <form class="md-layout home__input" @submit.prevent="sendUsername()">
        <md-field :class="messageClass">
          <label>Username</label>
          <md-input v-model="form.name" style="input" required md-counter="30" ></md-input>
          <span class="md-error">There is an error</span>
        </md-field>
        <md-button type="submit" class="md-icon-button submit-input md-accent" :disabled="sending"><md-icon>send</md-icon></md-button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { socket } from "../utils/socket.js";
import * as axios from "axios";

export default {
  name: "home",
  data() {
    return {
      form: {
        name: ""
      },
      sending: false
    };
  },
  computed: {
    messageClass() {
      return {
        "md-invalid": this.hasMessages
      };
    }
  },
  methods: {
    sendUsername() {
      console.log(this.form.name);
      axios
        .post("/users", {
          id: socket.id,
          name: this.form.name
        })
        .then(response => {
          if (response) {
            this.$router.push("/messenger");
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.home__input {
  padding-top: 50px;
  width: 70%;
  display: flex;
  margin: auto;
}
.input {
  display: flex;
}
.submit-input {
  margin: auto;
}
</style>

//md-counter="30"
