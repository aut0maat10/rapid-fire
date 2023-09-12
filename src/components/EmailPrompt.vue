<template>
  <div
    class="flex flex-col flex-wrap basis-full justify-center content-center bg-cover bg-center"
    :style="{ backgroundImage: `url(${backgroundImg})` }"
  >
    <h2 class="text-5xl font-bold text-slate-100 my-8">
      Are you ready to see your results?
    </h2>
    <h1>{{ userData.userName }}</h1>
    <form class="flex flex-col" action="">
      <label for="name">Please enter your name</label>
      <input
        type="name"
        v-model="userData.userName"
        placeholder="Type here"
        class="input input-bordered w-full max-w-xs"
      />
      <label for="email">Your best email</label>
      <input
        type="email"
        v-model="userData.userEmail"
        placeholder="test@testing.org"
        class="input input-bordered w-full max-w-xs"
      />
      <button
        class="btn btn-secondary"
        :class="{ [`btn-active`]: canSubmit }"
        type="submit"
      >
        See your results &#8594;
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
// import type { PropType } from 'vue'
// import type { Ref } from "vue";
import backgroundImg from "@/assets/img/startscreen-bg.jpg";

interface FormData {
  userName: string;
  userEmail: string;
}

export default defineComponent({
  name: "EmailPrompt",

  setup() {
    const userData = reactive<FormData>({ userName: "", userEmail: "" });
    const canSubmit = computed(
      () => userData.userEmail.length > 0 && userData.userName.length > 0
    );
    const handleSubmit = () => {
      alert("submitted!");
    };

    return { userData, handleSubmit, backgroundImg, canSubmit };
  },
});
</script>

<style scoped></style>
