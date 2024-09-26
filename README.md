# rapid-fire

`rapid-fire` is a quiz template for e-commerce and more. The content is configured in a `json` file, and the data and quiz components are dynamically rendered. The template collects user name, email, and keeps track of user answers. The template offers the flexibility to set up the entire quiz flow by adding quiz data to the `json` configuration file, but it also enables you to set up your custom end screen complete with collected user data (email, quiz answers) which can then be used to calculate which product is right for the user, display a personalized message, redirect to your web store, and more.

[See live demo here](https://d1tk1bfpsixa20.cloudfront.net/)

## Installation

1. `git clone`
2. `npm install`
3. Edit `src/data/test.json` to get started

## Components

### `StartScreen`

The initial screen of the quiz with a greeting message and a button to start the quiz.

**Parameters:**

```json
"startscreen": {
  "introtext": "Where should you travel next?",
  "cta_text": "Take Quiz",
  "background_img": "background.jpg"
},
```

🚨 The image should be placed in `src/assets/img`

### `EndScreen`

The `EndScreen` component comes with two options: Default (just add data in JSON config file) or Custom (build your own with custom logic for handling data, redirect, etc.).

To create a custom end screen:

- set `"custom"` to `true` in config file
- edit file `src/components/end-screen-custom.vue`
- get access to user input through `answersStore` (pinia)

**Parameters:**

**Default**

```json
"endscreen": {
  "custom": false,
  "header": "Nice to meet you, fellow traveler!",
  "text": "You will be redirected to your personal offer in 10 seconds.",
  "ctaurl": "https://www.google.com/search?q=nyc",
  "cta_text": "See your offer"
},
```

**Custom (build your own in `end-screen-custom.vue)**

```json
"endscreen": {
  "custom": true
},
```

### `StandardQuestion`

A straight-forward question template with a question prompt and dynamically rendered answer options, specified in an array.

**Parameters:**

```json
{
  "type": "standard-question",
  "question": "What's your favorite view?",
  "options": ["The beach", "The mountains", "The city"]
},
```

### `MultiSelect`

The user is able to select multiple options.

```json
{
  "type": "multi-select",
  "question": "I am a (select all that apply):",
  "options": [
    "Adventure seeker",
    "Luxury traveler",
    "Budget conscious",
    "Solo explorer"
  ]
}
```

Here is the JSON data template used for the demo version:

```json
{
  "type": "rapid-fire-quiz",
  "startscreen": {
    "introtext": "Where should you travel next?",
    "buttontext": "Take Quiz"
  },
  "endscreen": {
    "custom": true
  },
  "questions": [
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
    },
    {
      "type": "multi-select",
      "question": "I am a (select all that apply):",
      "options": [
        "Adventure seeker",
        "Luxury traveler",
        "Budget conscious",
        "Solo explorer"
      ]
    }
  ]
}
```
