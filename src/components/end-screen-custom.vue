<script setup lang="ts">
import { useAnswersStore } from "../stores/answers";
import nyc from "@/assets/img/nyc.jpg";
import vienna from "@/assets/img/vienna.jpg";
import martinique from "@/assets/img/martinique.jpg";

interface UserPreferences {
  favoriteView: string;
  favoriteFood: string;
  favoriteActivity: string;
}
const answersStore = useAnswersStore();
const userInput = answersStore.answer;
const userName = userInput[userInput.length - 1].userName;
const userPreferences = {
  favoriteView: userInput[0].value.option.toLowerCase(),
  favoriteFood: userInput[1].value.option.toLowerCase(),
  favoriteActivity: userInput[2].value.option.toLowerCase(),
};
const recommendation = (preferences: UserPreferences) => {
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
const redirect = () => {
  window.location.href = `https://www.google.com/search?q=${destination}`;
};
</script>

<template>
  <div
    class="endscreen h-screen flex flex-col basis-full flex-wrap bg-cover bg-bottom justify-center content-center gap-y-4"
    :style="{ backgroundImage: `url(${backgroundImg})` }"
  >
    <div
      class="wrapper rounded max-w-3xl bg-black bg-opacity-40 flex flex-col flex-wrap justify-center content-center px-8 py-12 gap-y-4 text-center"
    >
      <h2 class="text-5xl font-bold text-slate-100">
        Nice to meet you,
        {{ userName }}!
      </h2>
      <p class="text-2xl text-slate-100 py-4">
        Since your favorite view is {{ userPreferences.favoriteView }} and you
        are interested in {{ userPreferences.favoriteActivity }}, your next
        travel destination should be
        <span class="text-secondary text-4xl font-bold">{{ destination }}</span
        >. <br /><br />And, don't forget to treat yourself to some
        {{ userPreferences.favoriteFood }}!
      </p>
      <button @click="redirect" class="btn btn-secondary max-w-xs mx-auto">
        Check out our offers &#8594;
      </button>
    </div>
  </div>
</template>

<style scoped>
.endscreen {
  box-shadow: inset 0 0 0 2000px rgba(22, 21, 22, 0.3);
}
</style>
