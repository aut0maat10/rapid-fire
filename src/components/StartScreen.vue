<template>
  <div>Take this quiz to get started!</div>
  <button @click="startQuiz" class="rf-button">Start Quiz</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StartScreen",
  emits: ["quizStarted"],
  setup(props, { emit }) {
    const startQuiz = () => {
      emit("quizStarted");
    };

    return { emit, startQuiz };
  },
});
</script>

<style scoped></style>
