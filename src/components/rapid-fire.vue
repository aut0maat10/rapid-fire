<script setup lang="ts">
import { onMounted, ref, defineAsyncComponent, computed } from "vue";
import { storeToRefs } from "pinia";
import StartScreen from "./start-screen.vue";
import EndScreen from "./end-screen.vue";
import EndScreenCustom from "./end-screen-custom.vue";
import EmailPrompt from "./email-prompt.vue";
import { useQuizDataStore } from "@/stores/QuizData";
import { useCounterStore } from "../stores/counter";
import { useAnswersStore } from "../stores/answers";

const asyncComponents = {
  "standard-question": defineAsyncComponent(
    () => import("./standard-question.vue")
  ),
  "multi-select": defineAsyncComponent(() => import("./multi-select.vue")),
};

const currentComponent = computed(() => {
  return asyncComponents[componentToRender.value];
});

const quizStarted = ref(false);
const quizCompleted = ref(false);
const userDataSubmitted = ref(false);
// store
const { quizData, questionsCount } = storeToRefs(useQuizDataStore());
const counterStore = useCounterStore();
const answersStore = useAnswersStore();
const componentToRender = computed(() => {
  return quizData.value.questions[counterStore.count].type;
});
// methods
const submitHandler = (submission: any) => {
  answersStore.submitAnswer(submission);
  counterStore.increment();
  if (counterStore.count === questionsCount.value) {
    quizCompleted.value = true;
  }
};
const userDataSubmitHandler = (submission: any) => {
  answersStore.submitAnswer(submission);
  userDataSubmitted.value = true;
};
const startHandler = () => {
  quizStarted.value = true;
};
onMounted(() => {
  quizStarted.value = false;
});
</script>

<template>
  <div class="rapid-fire h-screen flex wrap justify-center bg-slate-900">
    <StartScreen v-if="!quizStarted" @quizStarted="startHandler" />
    <KeepAlive>
      <component
        v-if="quizStarted && !quizCompleted"
        :key="quizData.questions[counterStore.count]"
        :is="currentComponent"
        :quizData="quizData.questions[counterStore.count]"
        @submit="submitHandler"
      />
    </KeepAlive>
    <EmailPrompt
      @userDataSubmit="userDataSubmitHandler"
      v-if="quizCompleted && !userDataSubmitted"
    />
    <EndScreenCustom
      v-if="userDataSubmitted && quizData.endscreen.custom"
      :quizData
      :userAnswers="answersStore.answer"
    >
    </EndScreenCustom>
    <EndScreen v-if="userDataSubmitted && !quizData.endscreen.custom" />
  </div>
</template>

<style scoped></style>
