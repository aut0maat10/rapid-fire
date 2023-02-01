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
    </div>
    <button
      :disabled="!canSubmit"
      @click="onSubmit"
      class="next-question-button rf-button"
    >
      Next Question
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
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
    const canSubmit = computed(() => {
      return Object.keys(answer.value).length !== 0;
    });
    const onSubmit = () => {
      emit("submit", answer);
    };

    return { counterStore, answer, onSubmit, emit, canSubmit };
  },
});
</script>

<style scoped>
.options-wrapper {
  display: flex;
  flex-direction: column;
}
.options-button {
  display: flex;
}
.options-button input {
  /* margin-right: 1rem; */
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.1;
  /* display: grid; */
  /* grid-template-columns: 1em auto;
  gap: 0.5em; */
}
/* .next-question-button:active {
  background-color: #7fbeab;
} */
input[type="radio"] {
  flex-shrink: 0;
  appearance: none;
  /* background-color: #fff; */
  margin-right: 1rem;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 50%;
  transform: translateY(0.2em);
  display: grid;
  place-content: center;
}
input[type="radio"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset -1em 1em #2de1c2;
}

input[type="radio"]:checked::before {
  transform: scale(1);
}

input[type="radio"]:focus {
  outline: max(2px, 0.15em) solid currentColor;
  outline-offset: max(2px, 0.15em);
}
</style>
