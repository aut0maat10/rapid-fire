<script setup lang="ts">
import { ref, computed } from "vue";
const props = defineProps({
  quizData: Object,
});
const emit = defineEmits(["submit"]);
const canSubmit = computed(() => answers.value.length > 0);
const answers = ref([]);
const onSubmit = () => emit("submit", answers);
const isSelected = (index: number) => {
  return answers.value.some((answer) => answer["index"] === index);
};
</script>

<template>
  <div
    class="base-component flex flex-col flex-wrap justify-center content-center gap-y-4"
  >
    <h2 class="text-5xl font-bold text-slate-100 text-center">
      {{ props.quizData?.question }}
    </h2>
    <div
      class="options-wrapper flex flex-col flex-wrap justify-center content-center gap-y-4 my-8"
    >
      <label
        v-for="(option, index) in props.quizData?.options"
        :key="index"
        :for="option"
        class="btn btn-outline btn-success flex justify-start gap-x-4 sm:min-w-full lg:min-w-44"
        :class="{ [`btn-active`]: isSelected(index) }"
      >
        <input
          type="checkbox"
          class="radio radio-accent"
          :id="option"
          :value="{
            option: option,
            index: index,
            question: props.quizData?.question,
          }"
          v-model="answers"
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

<style lang="scss" scoped></style>
