<template>
  <main
    class="startscreen h-screen flex flex-col basis-full flex-wrap bg-cover justify-center content-center gap-y-4"
    :style="{ backgroundImage: `url(${backgroundImg})` }"
  >
    <div>
      <h2 class="text-5xl font-bold text-slate-100">
        Where should you travel next?
      </h2>
    </div>
    <button @click="startQuiz" class="btn btn-secondary mx-auto">
      Take Quiz &#8594;
    </button>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import backgroundImg from "@/assets/img/startscreen-bg.jpg";

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
main {
  background-position: 50% 45%;
  box-shadow: inset 0 0 0 2000px rgba(22, 21, 22, 0.3);
}
</style>
