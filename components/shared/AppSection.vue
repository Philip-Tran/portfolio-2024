<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps<{
    title?: String
}>()
</script>

<template>
    <div class="py-7 px-6 lg:py-9 lg:px-8 xl:py-10 xl:px-12 2xl:py-12 2xl:px-28 border-b border-text space-y-8">
        <h2 v-if="title" class="text-2xl">{{ props.title }}</h2>
        <slot />
    </div>
</template>