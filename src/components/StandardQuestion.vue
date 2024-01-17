<template>
  <div
    class="base-component flex flex-col flex-wrap justify-center content-center gap-y-4"
  >
    <h2 class="text-5xl font-bold text-slate-100 text-center">
      {{ quizData?.question }}
    </h2>
    <div
      class="options-wrapper flex flex-col flex-wrap justify-center content-center gap-y-4 my-8"
    >
      <label
        v-for="(option, index) in quizData?.options"
        :key="index"
        :for="option"
        class="btn btn-outline btn-success flex justify-start gap-x-4 sm:min-w-full lg:min-w-44"
        :class="{ [`btn-active`]: isSelected(index) }"
      >
        <input
          type="radio"
          class="radio radio-accent"
          :id="option"
          :value="{
            option: option,
            index: index,
            question: quizData.question,
          }"
          v-model="answer"
        />
        <span>{{ option }}</span>
      </label>
    </div>
    <button
      :disabled="!canSubmit"
      @click="onSubmit"
      class="btn btn-secondary self-center"
    >
      Next Question
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import type { Ref } from "vue";
import { useCounterStore } from "../stores/counter";

interface Answer {
  index?: number;
  option?: string;
  question?: string;
}
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
    let answer: Ref<Answer> = ref({});
    // methods
    const canSubmit = computed(() => {
      return Object.keys(answer.value).length !== 0;
    });
    const onSubmit = () => {
      emit("submit", answer);
    };
    const isSelected = (index: number) => {
      return index === answer.value["index"];
    };

    return { counterStore, answer, onSubmit, emit, canSubmit, isSelected };
  },
});
</script>

<style scoped></style>
