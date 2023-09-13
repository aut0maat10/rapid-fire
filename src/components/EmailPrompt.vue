<template>
  <div
    class="flex flex-col flex-wrap basis-full justify-center content-center bg-cover bg-center"
    :style="{ backgroundImage: `url(${backgroundImg})` }"
  >
    <h2 class="text-5xl font-bold text-slate-100 my-8">
      Are you ready to see your results?
    </h2>
    <form
      @submit="handleSubmit"
      class="flex flex-col flex-wrap justify-center content-center"
      action=""
    >
      <label for="name" class="mt-4"></label>
      <input
        type="name"
        v-model="userData.userName"
        placeholder="First name"
        class="input input-bordered w-full max-w-xs"
      />
      <!-- <label for="email" class="mt-4"></label>
      <input
        type="email"
        v-model="userData.userEmail"
        placeholder="Email"
        class="input input-bordered w-full max-w-xs"
      /> -->
      <div :class="{ error: v$.userEmail.$errors.length }">
        <input
          class="input input-bordered w-full max-w-xs"
          placeholder="Email"
          v-model="userData.userEmail"
        />
        <div
          class="input-errors"
          v-for="error of v$.userEmail.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <button
        class="btn btn-secondary mt-8"
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
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import backgroundImg from "@/assets/img/startscreen-bg.jpg";

interface FormData {
  userName: string;
  userEmail: string;
}

export default defineComponent({
  name: "EmailPrompt",

  setup() {
    const userData = reactive<FormData>({ userName: "", userEmail: "" });
    const rules = {
      userName: { required },
      userEmail: { required, email },
    };
    const v$ = useVuelidate(rules, userData);
    const canSubmit = computed(
      () => userData.userEmail.length > 0 && userData.userName.length > 0
    );
    const handleSubmit = async ($event: any) => {
      console.log(v$.value);
      const result = await v$.value.userEmail.$validate();
      if (result) {
        alert("success");
      } else {
        $event.preventDefault();
        console.log(v$);
        alert("error");
      }
    };

    return { userData, handleSubmit, backgroundImg, canSubmit, v$ };
  },
});
</script>

<style scoped></style>
