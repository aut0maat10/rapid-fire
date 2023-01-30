<template>
  <div class="rapid-fire">
    <StartScreen v-if="!quizStarted" @quizStarted="startHandler" />
    <component
      v-if="quizStarted && !quizCompleted"
      :key="quizDataStore.quizData[counterStore.count]"
      :is="quizDataStore.quizData[counterStore.count].type"
      :quizData="quizDataStore.quizData[counterStore.count]"
      @submit="submitHandler"
    />
    <EndScreen v-if="quizCompleted" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import StandardQuestion from "./StandardQuestion.vue";
import StartScreen from "./StartScreen.vue";
import EndScreen from "./EndScreen.vue";
import { useQuizDataStore } from "@/stores/QuizData";
import { isCoreComponent } from "@vue/compiler-core";
import { useCounterStore } from "../stores/counter";
import { useAnswersStore } from "../stores/answers";

export default defineComponent({
  setup() {
    onMounted(() => {
      quizStarted.value = false;
    });
    // lifecycle
    const quizStarted = ref(false);
    const quizCompleted = ref(false);
    // store
    const quizDataStore = useQuizDataStore();
    const counterStore = useCounterStore();
    const answersStore = useAnswersStore();
    // methods
    const submitHandler = (submission: any) => {
      answersStore.submitAnswer(submission);
      counterStore.increment();
      if (counterStore.count === quizDataStore.questionsCount) {
        quizCompleted.value = true;
      }
    };
    const startHandler = () => {
      quizStarted.value = true;
    };
    return {
      quizDataStore,
      counterStore,
      answersStore,
      submitHandler,
      onMounted,
      quizStarted,
      quizCompleted,
      startHandler,
    };
  },
  components: {
    StandardQuestion,
    isCoreComponent,
    StartScreen,
    EndScreen,
  },
});
</script>

<style scoped></style>
