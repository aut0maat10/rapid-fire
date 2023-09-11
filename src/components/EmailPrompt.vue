<template>
    <div class="flex flex-col justify-center content-center" :style="{backgroundImage: `url(${backgroundImg})`}">
        <h2 class="text-5xl font-bold text-slate-100 my-8">Are you ready to see your results?</h2>
        <form class="flex flex-col" action="">
            <label for="name">Please enter your name</label>
            <input type="name" v-model="formData.userName" placeholder="Type here" class="input input-bordered w-full max-w-xs">
            <label for="email">Your best email</label>
            <input type="email" v-model="formData.userEmail" placeholder="test@testing.org" class="input input-bordered w-full max-w-xs">
            <button class="btn btn-secondary" type="submit">See your results &#8594;</button>
        </form>
        

    </div>
</template>

<script lang="ts">

import { defineComponent, defineProps, ref } from 'vue'
import type { PropType } from 'vue'
import type { Ref } from "vue";
import backgroundImg from '@/assets/img/startscreen-bg.jpg'

interface FormData {
  userName?: string;
  userEmail?: string;
}

export default defineComponent({
    name: 'EmailPrompt',
    props: defineProps({
    formData: {
        type: Object as () => PropType<FormData>,
        required: true
    }
}),
  
    setup(props) {
        let formData: Ref<FormData> = ref({});

        const handleSubmit = () => {
            alert('submitted!')
        };

        return { formData, handleSubmit, backgroundImg }
    }
})
</script>

<style scoped>

</style>