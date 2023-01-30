<template>
  <div>Hello World</div>
  <button @click="startQuiz">Start Quiz</button>
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
