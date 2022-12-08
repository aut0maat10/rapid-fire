<template>
  <div>
    <h1>Hello World</h1>
    <component :is="data.questions[0].type" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StandardQuestion from "./StandardQuestion.vue";
import * as data from "../configfiles/test.json";

export default defineComponent({
  setup() {
    return {
      data,
    };
  },
  components: {
    StandardQuestion,
  },
});
</script>

<style scoped></style>
