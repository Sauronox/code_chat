<template>
    <div class="editor-message">
          <form class="md-layout" @submit.prevent="sendMessage()">
            <div class="form-input">
                <md-field md-clearable>
                    <md-input class="input" v-model="form.text" md-counter="300" required></md-input>
                </md-field>
                <md-button type="submit" class="md-icon-button submit-input md-accent" :disabled="sending"><md-icon>send</md-icon></md-button>
            </div>
          </form>
        </div>
</template>

<script>
export default {
  name: "messenger-input",
  data() {
    return {
      form: {
        text: ""
      },
      sending: false
    };
  },
  methods: {
    sendMessage() {
      this.$emit("message", this.form.text);
      this.form.text = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.form-input {
  display: flex;
  width: 750px;
}
.input {
  align-self: flex-end;
  width: 100%;
}
.submit-input {
  margin: auto;
}
</style>
