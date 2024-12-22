<script lang="ts" setup>
const props = defineProps({
    title: {
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
        :class="borderBottom ? 'border-b border-text' : ''">
        <h2 v-if="title" class="text-2xl xl:text-3xl 2xl:text-4xl">{{ props.title }}</h2>
        <slot />
    </div>
</template>