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
      <div class="mt-4" :class="{ error: v$.userName.$errors.length }">
        <label for="name"></label>
        <input
          name="firstname"
          class="input input-bordered w-full max-w-xs"
          :class="{ [`input-error`]: v$.userName.$errors.length }"
          placeholder="First name"
          v-model="userData.userName"
        />
        <div
          class="input-errors bg-error rounded"
          v-for="error of v$.userName.$errors"
          :key="error.$uid"
        >
          <div class="error-msg text-error-content text-center p-1">
            Please enter your name
          </div>
        </div>
      </div>
      <div class="mt-4" :class="{ error: v$.userEmail.$errors.length }">
        <label for="email"></label>
        <input
          type="email"
          class="input input-bordered w-full max-w-xs"
          :class="{ [`input-error`]: v$.userEmail.$errors.length }"
          placeholder="Email"
          v-model="userData.userEmail"
        />
        <div
          class="input-errors bg-error rounded"
          v-for="error of v$.userEmail.$errors"
          :key="error.$uid"
        >
          <div class="error-msg text-error-content text-center p-1">
            Please enter a valid email
          </div>
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
import { required, email, minLength } from "@vuelidate/validators";
import backgroundImg from "@/assets/img/startscreen-bg.jpg";

interface FormData {
  userName: string;
  userEmail: string;
}

export default defineComponent({
  name: "EmailPrompt",
  emits: ["userDataSubmit"],
  setup(props, { emit }) {
    const userData = reactive<FormData>({ userName: "", userEmail: "" });
    const rules = {
      userName: { required, minLength: minLength(1) },
      userEmail: { required, email },
    };
    const v$ = useVuelidate(rules, userData);
    const canSubmit = computed(
      () => userData.userEmail.length > 0 && userData.userName.length > 0
    );
    const handleSubmit = async ($event: any) => {
      console.log(v$.value);
      const result = await v$.value.$validate();
      if (result) {
        $event.preventDefault();
        emit("userDataSubmit", userData);
      } else {
        $event.preventDefault();
        console.log(v$);
      }
    };

    return { userData, handleSubmit, backgroundImg, canSubmit, v$, minLength };
  },
});
</script>

<style scoped></style>
