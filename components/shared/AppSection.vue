<script lang="ts" setup>
const props = defineProps({
    title: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    borderBottom: {
        type: Boolean,
        required: false,
        default: true
    }
})
</script>

<template>
    <div class="py-7 px-6 lg:py-9 lg:px-8 xl:py-10 xl:px-12 2xl:py-12 2xl:px-28 space-y-8"
        :class="borderBottom ? 'border-b border-text border-opacity-70' : ''">
        <div>
            <h2 v-if="title" class="text-2xl xl:text-3xl 2xl:text-4xl">{{ props.title }}</h2>
            <p v-if="description" class="text-text text-lg lg:text-xl 2xl:text-xl mt-2 lg:mt-4 xl:mt-5 2xl:mt-2 ">{{
                props.description }}</p>
        </div>
        <slot />
    </div>
</template>