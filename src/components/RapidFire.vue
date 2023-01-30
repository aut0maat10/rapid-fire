<template>
  <div class="rapid-fire">
    <component
      :key="quizDataStore.quizData[counterStore.count]"
      :is="quizDataStore.quizData[counterStore.count].type"
      :quizData="quizDataStore.quizData[counterStore.count]"
      @submit="submitHandler"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StandardQuestion from "./StandardQuestion.vue";
import { useQuizDataStore } from "@/stores/QuizData";
import { isCoreComponent } from "@vue/compiler-core";
import { useCounterStore } from "../stores/counter";
import { useAnswersStore } from "../stores/answers";

export default defineComponent({
  setup() {
    const quizDataStore = useQuizDataStore();
    const counterStore = useCounterStore();
    const answersStore = useAnswersStore();
    const submitHandler = (submission: any) => {
      answersStore.submitAnswer(submission);
      counterStore.increment();
    };
    return {
      quizDataStore,
      counterStore,
      answersStore,
      submitHandler,
    };
  },
  components: {
    StandardQuestion,
    isCoreComponent,
  },
});
</script>

<style scoped></style>
