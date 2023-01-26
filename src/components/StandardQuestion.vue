<template>
  <div class="base-component">
    <h2>{{ quizData?.question }}</h2>
    <div class="options-wrapper">
      <div v-for="(option, index) in quizData?.options" :key="index">
        <input type="radio" :id="option" :value="option" v-model="picked" />
        <label :for="option">{{ option }}</label>
      </div>
    </div>
    <button
      class="next-question-button"
      :disabled="btnDisabled"
      @click="onSubmit"
    >
      Next Question
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseQuestion",
  setup() {
    return {};
  },
  data() {
    return {
      picked: "",
    };
  },
  props: {
    quizData: Object,
  },
  methods: {
    onSubmit() {
      !this.picked
        ? alert("make selection")
        : this.$emit("submitAnswer", this.picked);
    },
  },
  computed: {
    btnDisabled() {
      return !this.picked;
    },
  },
});
</script>

<style scoped></style>
