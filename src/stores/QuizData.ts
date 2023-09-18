import { defineStore } from "pinia";
import quizJson from "@/data/test.json";

type Question = {
  options: Array<string>;
  question: string;
  type: string;
};
type StartScreen = {
  buttontext: string;
  introtext: string;
};
interface QuizData {
  questions: Question[];
  startscreen: StartScreen;
  type: string;
}

const quizData: QuizData = quizJson;
const questionsCount = quizData.questions.length;

export const useQuizDataStore = defineStore("quizData", {
  state: () => ({
    quizData,
    questionsCount,
  }),
});
