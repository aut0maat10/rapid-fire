<template>
  <div class="text-center m-12">
    <h2 class="text-3xl mb-8">Custom End Screen</h2>
    <h2 class="text-2xl mb-4 text-secondary">User Answers</h2>
    <p class="">{{ props.userAnswers }}</p>
    <h2 class="text-2xl my-4 text-secondary">Quiz Data</h2>
    <p class="">{{ props.quizData }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  quizData: Object,
  userAnswers: Array,
});
</script>

<style scoped></style>
