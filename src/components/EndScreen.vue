<template>
  <div
    class="h-screen flex flex-col basis-full flex-wrap bg-cover bg-bottom justify-center content-center gap-y-4"
    :style="{ backgroundImage: `url(${backgroundImg})` }"
  >
    <h2>Nice to meet you, {{ userName }}!</h2>
    <p>
      Since your favorite view is {{ userPreferences.favoriteView }} and you are
      interested in {{ userPreferences.favoriteActivity }}, your next travel
      destination should be {{ destination }}. And, don't forget to treat
      yourself to some {{ userPreferences.favoriteFood }}!
    </p>
    <button class="btn btn-secondary">Check out our offers &#8594;</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAnswersStore } from "../stores/answers";
import nyc from "@/assets/img/nyc.jpg";
import vienna from "@/assets/img/vienna.jpg";
import martinique from "@/assets/img/martinique.jpg";

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
      let destination: string = "";
      let backgroundImg;
      switch (preferences.favoriteView) {
        case "the beach":
          destination = "Martinique";
          backgroundImg = martinique;
          break;
        case "the mountains":
          destination = "Vienna";
          backgroundImg = vienna;
          break;
        default:
          destination = "New York City";
          backgroundImg = nyc;
      }
      return {
        destination,
        backgroundImg,
      };
    };
    const { destination, backgroundImg } = recommendation(userPreferences);

    return {
      answersStore,
      backgroundImg,
      destination,
      nyc,
      vienna,
      martinique,
      userName,
      recommendation,
      userInput,
      userPreferences,
    };
  },
});
</script>

<style scoped></style>
