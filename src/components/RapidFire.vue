<template>
  <div class="rapid-fire h-screen flex wrap justify-center bg-slate-900">
    <StartScreen v-if="!quizStarted" @quizStarted="startHandler" />
    <component
      v-if="quizStarted && !quizCompleted"
      :key="quizDataStore.quizData.questions[counterStore.count]"
      :is="quizDataStore.quizData.questions[counterStore.count].type"
      :quizData="quizDataStore.quizData.questions[counterStore.count]"
      @submit="submitHandler"
    />
    <EmailPrompt
      @userDataSubmit="userDataSubmitHandler"
      v-if="quizCompleted && !userDataSubmitted"
    />
    <EndScreen v-if="userDataSubmitted" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import StandardQuestion from "./StandardQuestion.vue";
import StartScreen from "./StartScreen.vue";
import EndScreen from "./EndScreen.vue";
import EmailPrompt from "./EmailPrompt.vue";
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
    const userDataSubmitted = ref(false);
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
    const userDataSubmitHandler = (submission: any) => {
      answersStore.submitAnswer(submission);
      userDataSubmitted.value = true;
      // quizCompleted.value = true;
      // quizStarted.value = true;
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
      userDataSubmitted,
      startHandler,
      userDataSubmitHandler,
    };
  },
  components: {
    StandardQuestion,
    isCoreComponent,
    StartScreen,
    EndScreen,
    EmailPrompt,
  },
});
</script>

<style scoped></style>
