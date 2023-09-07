<template>
  <main class="startscreen" :style="{backgroundImage: `url(${backgroundImg})`}">
    <div>
      <h2 class="text-4xl font-bold">Where should you travel next?</h2>
    </div>
  <button @click="startQuiz" class="rf-button">Start Quiz</button>
  </main> 
</template>

<script lang="ts">
import { defineComponent } from "vue";
import backgroundImg from '@/assets/img/startscreen-bg.jpg'

export default defineComponent({
  name: "StartScreen",
  emits: ["quizStarted"],
  setup(props, { emit }) {
    const startQuiz = () => {
      emit("quizStarted");
    };

    return { emit, startQuiz, backgroundImg };
  },
});
</script>

<style scoped>
  .startscreen {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  main {
    background-size: cover;
    background-position: 50% 40%;
    box-shadow: inset 0 0 0 2000px rgba(22, 21, 22, 0.3);
  }
</style>
