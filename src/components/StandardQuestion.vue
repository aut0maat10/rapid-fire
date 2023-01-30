<template>
  <div class="base-component">
    <h2>{{ quizData?.question }}</h2>
    <div class="options-wrapper">
      <div v-for="(option, index) in quizData?.options" :key="index">
        <input
          type="radio"
          :id="option"
          :value="{ question: quizData.question, answer: option, index: index }"
          v-model="answer"
        />
        <label :for="option">{{ option }}</label>
      </div>
    </div>
    <button class="next-question-button">Next Question</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useCounterStore } from "../stores/counter";

export default defineComponent({
  name: "BaseQuestion",
  props: {
    quizData: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    const counterStore = useCounterStore();
    const answer = ref([]);

    return { counterStore, answer };
  },
});
</script>

<style scoped></style>
