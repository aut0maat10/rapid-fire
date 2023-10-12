# rapid-fire

`rapid-fire` is a quiz template for e-commerce and more. The questions are specified in a `json` file, and the data and quiz components are dynamically rendered with Vue.js.

[See live demo here](https://d1tk1bfpsixa20.cloudfront.net/)

In `v0.0.0`, includes `StartScreen` and `StandardQuestion` components as well as an `EmailPrompt` component for user name and email collection. This demo version uses a custom `EndScreen` component with results calculated based on user input. A default end screen and several other components will be added eventually. 

Here is the `json` data template used for the demo version:

```json
[
  {
    "type": "standard-question",
    "question": "What's your favorite view?",
    "options": ["The beach", "The mountains", "The city"]
  },
  {
    "type": "standard-question",
    "question": "What would you like to eat?",
    "options": ["pizza", "chocolate", "seafood"]
  },
  {
    "type": "standard-question",
    "question": "Which activity would you like to try?",
    "options": ["Hiking", "Barhopping", "Shopping"]
  }
]
```
