<template>
  <div class="rapid-fire">
    <component
      :is="quizDataStore.quizData[counterStore.count].type"
      :quizData="quizDataStore.quizData[counterStore.count]"
      v-model="answerObject"
      @submitAnswer="handleResult"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StandardQuestion from "./StandardQuestion.vue";
import { useQuizDataStore } from "@/stores/QuizData";
import { isCoreComponent } from "@vue/compiler-core";
import { useCounterStore } from "../stores/counter";

export default defineComponent({
  setup() {
    const quizDataStore = useQuizDataStore();
    const counterStore = useCounterStore();
    return {
      quizDataStore,
      counterStore,
    };
  },
  data() {
    return {
      answerObject: {},
    };
  },
  components: {
    StandardQuestion,
    isCoreComponent,
  },
  methods: {
    handleResult() {
      alert("hi");
    },
  },
});
</script>

<style scoped></style>
