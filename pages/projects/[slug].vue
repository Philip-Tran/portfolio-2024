<script setup lang="ts">
import { type Project, projects } from '~/lib/content';

const route = useRoute()

const project = ref<Project>()
onBeforeMount(() => {
    project.value = projects.find((p) => p.slug === route.params.slug)
})
</script>

<template>
    <div>
        <SharedAppSection>
            <div>
                back
            </div>
            <div>
                <h1>{{ project?.title }}</h1>
            </div>
        </SharedAppSection>
    </div>
</template>