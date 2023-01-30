<template>
  <div class="base-component">
    <h2>{{ quizData?.question }}</h2>
    <div class="options-wrapper">
      <div v-for="(option, index) in quizData?.options" :key="index">
        <input
          type="radio"
          :id="option"
          :value="{ option: option, index: index, question: quizData.question }"
          v-model="answer"
        />
        <label :for="option">{{ option }}</label>
      </div>
    </div>
    <button @click="onSubmit" class="next-question-button">
      Next Question
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useCounterStore } from "../stores/counter";

export default defineComponent({
  name: "BaseQuestion",
  emits: ["submit"],
  props: {
    quizData: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const counterStore = useCounterStore();
    // const defaultState = {};
    let answer = ref({});
    // function resetState() {
    //   Object.assign(answer, defaultState);
    // }
    const onSubmit = () => {
      console.log(answer);
      emit("submit", answer);
      // resetState();
    };

    return { counterStore, answer, onSubmit, emit };
  },
});
</script>

<style scoped></style>
