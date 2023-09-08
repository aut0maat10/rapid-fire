<template>
    <div class="flex flex-col justify-center content-center" :style="{backgroundImage: `url(${backgroundImg})`}">
        <h2 class="text-5xl font-bold text-slate-100 my-8">Are you ready to see your results?</h2>
        <form class="flex flex-col" action="">
            <label for="name">Please enter your name</label>
            <input type="name">
            <label for="email">Your best email</label>
            <input type="email">
            <button class="btn btn-secondary" type="submit">See your results &#8594;</button>
        </form>
        

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import backgroundImg from '@/assets/img/startscreen-bg.jpg'

export default defineComponent({
    setup () {
        return {backgroundImg}
    }
})
</script>

<style scoped>

</style>