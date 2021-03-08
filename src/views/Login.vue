<template>
  <section class="card-container ">
    <div class="card-title"></div>
    <div class="card-content">
      <div class="content-left">
        <img src="../assets/lateral.png" />
      </div>
      <div class="content-right">
        <div class="title-content">
          <h1>Create Account</h1>
        </div>
        <div class="input-content">
          <div
            v-for="(item, index) in loginInputs"
            :key="`input_login_${index}`"
          >
            <TextInput
              v-if="item.type !== 'pass'"
              :item="item"
              :itemId="`input_loginInputs_${index}`"
            />
            <PasswordInput
              v-else
              :item="item"
              :itemId="`input_loginInputs_${index}`"
            />
          </div>
        </div>
        <div class="button-container">
          <Button label="Submit" icon="pi pi-send" iconPos="right" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PasswordInput from "../components/PasswordInput";
import TextInput from "../components/TextInput";
import Button from "primevue/button";
import { CreateAccountInputs } from "../mockup/data";

export default {
  components: {
    TextInput,
    PasswordInput,
    Button,
  },

  data: () => ({
    loginInputs: CreateAccountInputs,
  }),
};
</script>

<style lang="scss" scoped>
.card-container {
  display: block;
  width: 100%;

  .card-content {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    justify-content: center;

    .content-left {
      display: flex;
      flex-basis: 20%;
      background: red;

      img {
        width: 100%;
      }
    }
    .content-right {
      display: flex;
      flex-basis: 30%;
      flex-direction: column;
      background: lightgrey;
      align-items: center;

      .input-content {
        width: 95%;
        display: flex;
        flex-flow: column wrap;
        margin: 5%;
      }

      .button-container {
        width: 50%;
        display: flex;
        justify-content: center;
        padding-bottom: 20px;
      }
    }
  }
}

@media (max-width: 1300px) {
  .content-left {
    display: none !important;
  }
}
</style>
