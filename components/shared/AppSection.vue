<script lang="ts" setup>
const props = defineProps<{
    title?: String
}>()
</script>

<template>
    <div class="py-7 px-6 border-b border-text space-y-8">
        <h2 v-if="title" class="text-2xl">{{ props.title }}</h2>
        <slot />
    </div>
</template>