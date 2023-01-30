<template>
  <h2>Good Job</h2>
  <div>
    <p>{{ answersStore.answer }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAnswersStore } from "../stores/answers";

export default defineComponent({
  setup() {
    const answersStore = useAnswersStore();
    return { answersStore };
  },
});
</script>

<style scoped></style>
