<template>
  <div>
    <h1>Hello World</h1>
    <component
      :is="quizDataStore.quizData[0].type"
      :quizData="quizDataStore.quizData[0]"
      @submitAnswer="handleResult"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StandardQuestion from "./StandardQuestion.vue";
import { useQuizDataStore } from "@/stores/QuizData";
import { isCoreComponent } from "@vue/compiler-core";

export default defineComponent({
  setup() {
    const quizDataStore = useQuizDataStore();
    return {
      quizDataStore,
    };
  },
  data() {
    return {
      answers: [],
    };
  },
  components: {
    StandardQuestion,
    isCoreComponent,
  },
  methods: {
    handleResult(res) {
      alert(res);
    },
  },
});
</script>

<style scoped></style>
