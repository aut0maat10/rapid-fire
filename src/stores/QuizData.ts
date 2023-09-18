import { defineStore } from "pinia";
import quizData from "@/data/test.json";

export const useQuizDataStore = defineStore("quizData", {
  state: () => ({
    quizData,
    questionsCount: quizData.questions.length,
  }),
});
