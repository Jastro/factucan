<template name="password-input">
  <div class="input-container">
    <label :class="errorClass">{{ item.label }}</label>
    <input
      :class="errorClass"
      :type="inputType"
      :placeholder="item.placeholder"
      :required="item.isRequired"
      :id="itemId"
    />
    <div class="icon">
      <i @click="onIconClick" class="pi" :class="iconClass"></i>
    </div>
    <label v-if="item.haveError" :class="errorClass">{{ item.error }}</label>
  </div>
</template>

<script>
export default {
  name: "password-input",
  data: () => ({
    showingPassword: false,
  }),
  props: {
    item: { type: Object },
    itemId: { type: String },
  },
  computed: {
    iconClass() {
      return this.showingPassword ? "pi-eye-slash" : "pi-eye";
    },
    inputType() {
      return this.showingPassword ? "text" : "password";
    },
    errorClass() {
      return this.item.haveError ? "error" : "";
    },
  },
  methods: {
    onIconClick() {
      this.showingPassword = !this.showingPassword;
    },
  },
};
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  position: relative;
}
.icon {
  position: absolute;
  right: 1%;
  top: 30px;
  color: grey;

  &:hover {
    cursor: pointer;
    color: black;
  }
}
input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid grey;
}
input.error {
  border-radius: 5px;
  border: 1px solid red;
}

label {
  text-align: initial;
}

label.error {
  color: red;
}
</style>
