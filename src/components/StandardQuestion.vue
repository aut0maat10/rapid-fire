<template>
  <div class="base-component">
    <h2>{{ quizData?.question }}</h2>
    <div class="options-wrapper">
      <label
        v-for="(option, index) in quizData?.options"
        :key="index"
        :for="option"
        class="rf-button options-button"
      >
        <input
          type="radio"
          :id="option"
          :value="{
            option: option,
            index: index,
            question: quizData.question,
          }"
          v-model="answer"
        />
        {{ option }}
      </label>
      <!-- </div> -->
    </div>
    <button @click="onSubmit" class="next-question-button rf-button">
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
    let answer = ref({});
    // methods
    const onSubmit = () => {
      console.log(answer);
      emit("submit", answer);
    };

    return { counterStore, answer, onSubmit, emit };
  },
});
</script>

<style scoped>
.options-wrapper {
  display: flex;
  flex-direction: column;
}

.options-button input {
  margin-right: 1rem;
}
input[type="radio"] {
  flex-shrink: 0;
}
</style>
