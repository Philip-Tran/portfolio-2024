<script setup lang="ts">
import { ArrowLeft, Github } from 'lucide-vue-next';
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
                <NuxtLink to="/projects">
                    <Button class="px-0 hover:text-orange-500  transition-all duration-600">
                        <ArrowLeft />
                        <span>Back</span>
                    </Button>
                </NuxtLink>
            </div>
            <div class="flex flex-col space-y-9">
                <div class="flex flex-col lg:flex-row">
                    <div class="flex flex-col space-y-1 lg:space-y-8 2xl:space-y-10 lg:w-2/3">
                        <div class="flex flex-col space-y-3 lg:space-y-4 2xl:space-y-6">
                            <h1 class="text-2xl font-normal ">{{ project?.title }}</h1>
                            <p>{{ project?.description }}</p>
                        </div>
                        <div class="flex space-x-2 lg:space-x-3">
                            <NuxtLink v-if="project?.linkLive" :to="project?.linkLive" external target="_blank">
                                <Button class="bg-transparent  border-text rounded-sm" variant="outline">View Live
                                    Website</Button>
                            </NuxtLink>
                            <NuxtLink v-if="project?.repoLink" :to="project?.repoLink" external target="_blank">
                                <Button class="bg-transparent  border-text rounded-sm" variant="outline">
                                    <Github />
                                    <span>Repo</span>
                                </Button>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="lg:w-1/3 lg:flex lg:flex-col space-y-6">
                        <span class="text-lg 2xl:text-2xl">Stack</span>
                        <div class="flex flex-wrap gap-3">
                            <div v-for="item in project?.stack"
                                class="py-1 px-2 rounded-lg border border-text text-text">
                                <span>{{ item }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col space-y-4 lg:space-y-7 2xl:space-y-12">
                    <div class="" v-for="item in project?.screenShots" :key="item.altText">
                        <NuxtImg :src="item.url" />
                    </div>
                </div>
            </div>
        </SharedAppSection>
    </div>
</template>