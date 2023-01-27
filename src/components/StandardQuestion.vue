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
    <button @click="onSubmit" class="next-question-button">
      Next Question
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useCounterStore } from "../stores/counter";

// interface OurModelType {
//   answer: string;
// }

export default defineComponent({
  name: "BaseQuestion",
  emits: ["update:modelValue"], // The component emits an event
  props: {
    quizData: {
      type: Object,
      default: () => ({}),
    },
    modelValue: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const counterStore = useCounterStore();
    const answer = computed({
      // Use computed to wrap the object
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    });

    return { answer, counterStore };
  },
  methods: {
    onSubmit() {
      this.counterStore.increment();
    },
  },
});
// data() {
//   return {
//     picked: "",
//   };
// },

//   computed: {
//     btnDisabled() {
//       return !this.picked;
//     },
//   },
// });
</script>

<style scoped></style>
