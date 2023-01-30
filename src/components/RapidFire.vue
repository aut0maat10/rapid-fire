<template>
  <div class="rapid-fire">
    <StartScreen v-if="!quizStarted" @quizStarted="startHandler" />
    <component
      v-if="quizStarted"
      :key="quizDataStore.quizData[counterStore.count]"
      :is="quizDataStore.quizData[counterStore.count].type"
      :quizData="quizDataStore.quizData[counterStore.count]"
      @submit="submitHandler"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import StandardQuestion from "./StandardQuestion.vue";
import StartScreen from "./StartScreen.vue";
import { useQuizDataStore } from "@/stores/QuizData";
import { isCoreComponent } from "@vue/compiler-core";
import { useCounterStore } from "../stores/counter";
import { useAnswersStore } from "../stores/answers";

export default defineComponent({
  setup() {
    onMounted(() => {
      quizStarted.value = false;
    });
    const quizStarted = ref(false);
    const quizDataStore = useQuizDataStore();
    const counterStore = useCounterStore();
    const answersStore = useAnswersStore();
    const submitHandler = (submission: any) => {
      answersStore.submitAnswer(submission);
      counterStore.increment();
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
      startHandler,
    };
  },
  components: {
    StandardQuestion,
    isCoreComponent,
    StartScreen,
  },
});
</script>

<style scoped></style>
