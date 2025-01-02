<script lang="ts" setup>
type HtmlTag = 'section' | 'div'

withDefaults(defineProps<{
    title?: string
    description?: string
    borderBottom?: boolean
    htmlTag?: HtmlTag
}>(), {
    borderBottom: true,
    htmlTag: 'section'
})
</script>

<template>
    <component :is="htmlTag" class="py-7 px-6 lg:py-9 lg:px-8 xl:py-10 xl:px-12 2xl:py-12 2xl:px-28 space-y-8"
        :class="borderBottom ? 'border-b border-text border-opacity-50' : ''">
        <div v-if="title || description">
            <h2 v-if="title" class="text-2xl font-medium xl:text-3xl 2xl:text-4xl">{{ title }}</h2>
            <p v-if="description" class="text-text text-lg lg:text-xl 2xl:text-xl mt-2 lg:mt-4 xl:mt-5 2xl:mt-2">
                {{ description }}
            </p>
        </div>
        <slot />
    </component>
</template>