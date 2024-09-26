<template>
  <main
    class="startscreen h-screen flex flex-col basis-full flex-wrap bg-cover justify-center content-center gap-y-4"
    :style="{ backgroundImage: `url(${backgroundImg})` }"
  >
    <div>
      <h2 class="text-5xl font-bold text-slate-100 mb-4 text-center">
        {{ startScreenData.introtext }}
      </h2>
    </div>
    <button @click="startQuiz" class="btn btn-secondary mx-auto">
      {{ startScreenData.cta_text }} &#8594;
    </button>
  </main>
</template>

<script setup lang="ts">
// TODO: allow user to set bg-img in config file
import backgroundImg from "@/assets/img/startscreen-bg.jpg";
import { useQuizDataStore } from "@/stores/QuizData";
const quizDataStore = useQuizDataStore();
const startScreenData = quizDataStore.quizData.startscreen;
const startQuiz = () => {
  emit("quizStarted");
};
const emit = defineEmits(["quizStarted"]);
</script>

<style scoped>
main {
  background-position: 50% 45%;
  box-shadow: inset 0 0 0 2000px rgba(22, 21, 22, 0.3);
}
</style>
