<template>
  <div
    class="h-screen flex flex-col basis-full flex-wrap bg-cover bg-bottom justify-center content-center gap-y-4"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <h2>Nice to meet you, {{ userName }}!</h2>
    <p>
      Since your favorite view is {{ userPreferences.favoriteView }} and you are
      interested in {{ userPreferences.favoriteActivity }}, your next travel
      destination should be {{ recommendation(userPreferences) }}. And, don't
      forget to treat yourself to some {{ userPreferences.favoriteFood }}!
    </p>
    <button class="btn btn-secondary">Check out our offers &#8594;</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAnswersStore } from "../stores/answers";
import backgroundImage from "@/assets/img/nyc.jpg";
interface userPreferences {
  favoriteView: string;
  favoriteFood: string;
  favoriteActivity: string;
}

export default defineComponent({
  setup() {
    const answersStore = useAnswersStore();
    const userInput = answersStore.answer;
    const userName = userInput[userInput.length - 1].userName;
    const userPreferences = {
      favoriteView: userInput[0].value.option.toLowerCase(),
      favoriteFood: userInput[1].value.option.toLowerCase(),
      favoriteActivity: userInput[2].value.option.toLowerCase(),
    };

    const recommendation = (preferences: userPreferences) => {
      let rec: string = "";
      switch (preferences.favoriteView) {
        case "The beach":
          rec = "Martinique";
          break;
        case "The mountains":
          rec = "Geneva";
          break;
        default:
          rec = "New York City";
      }
      return rec;
    };

    return {
      answersStore,
      backgroundImage,
      userName,
      recommendation,
      userInput,
      userPreferences,
    };
  },
});
</script>

<style scoped></style>
