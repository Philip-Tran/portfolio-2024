<script setup lang="ts">
import { ScrollArea } from '~/components/ui/scroll-area';
import { videos } from '~/lib/content/video-portfolio';

function getYoutubeId(url: string) {
    const urlObj = new URL(url);
    if (urlObj.hostname.includes('youtube.com') || urlObj.hostname.includes('youtu.be')) {
        if (urlObj.pathname.includes('/shorts/')) {
            return urlObj.pathname.split('/shorts/')[1];
        }
        if (urlObj.searchParams.has('v')) {
            return urlObj.searchParams.get('v');
        }
        return urlObj.pathname.substring(1);
    }
    return null;
}

function handleMouseEnter(event: MouseEvent) {
    const target = event.target;
    if (target && target instanceof HTMLIFrameElement) {
        target.src = target.src.replace('autoplay=0', 'autoplay=1');
    }
}

function handleMouseLeave(event: MouseEvent) {
    const target = event.target;
    if (target && target instanceof HTMLIFrameElement) {
        target.src = target.src.replace('autoplay=1', 'autoplay=0');
    }
}

</script>

<template>
    <SharedAppSection title="Videos Editing Portfolio">
        <div>
            <div
                class="flex flex-col space-y-8 lg:grid lg:grid-flow-row lg:grid-cols-2 lg:space-x-0 lg:space-y-0 lg:gap-9 xl:gap-10 2xl:gap-y-14 2xl:gap-x-12">

                <!-- Card -->
                <div v-for="video in videos" :key="video.title" class="relative w-full">
                    <Sheet class="w-full h-full">
                        <SheetTrigger class="absolute inset-0 z-50">
                        </SheetTrigger>

                        <div class="space-y-2 lg:space-y-5 hover:text-orange-500">
                            <div class="w-full relative group aspect-video">
                                <div class="w-full h-full rounded-lg overflow-hidden">
                                    <iframe
                                        :src="`https://www.youtube.com/embed/${getYoutubeId(video.youtubeUrl[0])}?autoplay=0&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${getYoutubeId(video.youtubeUrl[0])}`"
                                        class="w-full h-full" :title="video.title" frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                                    </iframe>
                                </div>
                                <div
                                    class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg">
                                </div>
                            </div>

                            <div class="space-y-2 flex flex-col-reverse lg:flex-col">
                                <ul class="flex flex-wrap gap-2 mt-4 lg:mt-0">
                                    <li v-for="tool in video.tools" :key="tool"
                                        class="px-3 py-1 text-base lg:text-md font-medium bg-blue-500 rounded-full text-white">
                                        {{ tool }}
                                    </li>
                                </ul>
                                <h2 class="text-xl mb-8 lg:mb-0 lg:text-2xl font-normal">{{ video.title }}</h2>
                            </div>
                        </div>

                        <SheetContent side="bottom" class="h-[90%] flex flex-col">
                            <SheetHeader class="justify-center items-center">
                                <SheetTitle class="text-4xl">{{ video.title }}</SheetTitle>
                                <SheetDescription>
                                    {{ video.description || 'Video project showcase' }}
                                </SheetDescription>
                            </SheetHeader>

                            <!-- Scrollable Content -->
                            <div class="flex-1 overflow-hidden">
                                <ScrollArea class="h-full overflow-y-auto">
                                    <div
                                        class="bg-slate-50 rounded-xl px-5 py-12 mx-auto max-w-[1300px] min-h-[1000px]">
                                        <!-- Tools Used -->
                                        <div class="flex flex-col items-center justify-center">
                                            <h6 class="text-lg font-medium">Tools Used</h6>
                                            <div class="flex flex-wrap gap-2 mt-3">
                                                <div v-for="tool in video.tools" :key="tool"
                                                    class="px-3 py-1 text-lg font-semibold text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
                                                    {{ tool }}
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Direct Links -->
                                        <div class="my-5 xl:my-12 flex flex-col items-center justify-center">
                                            <h6 class="text-lg font-medium">Direct Video Link</h6>
                                            <div v-for="link in video.youtubeUrl" :key="link">
                                                <NuxtLink :href="link" target="_blank" external>{{ link }}</NuxtLink>
                                            </div>
                                        </div>

                                        <!-- Video List -->
                                        <div class="space-y-8">
                                            <div v-for="(youtubeUrl, index) in video.youtubeUrl" :key="index"
                                                class="w-full aspect-video bg-slate-500 rounded-lg overflow-hidden">
                                                <iframe
                                                    :src="`https://www.youtube.com/embed/${getYoutubeId(youtubeUrl)}?autoplay=0&controls=1&showinfo=1&rel=0`"
                                                    class="w-full h-full" :title="`${video.title} - Video ${index + 1}`"
                                                    frameborder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowfullscreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollArea>
                            </div>

                            <SheetFooter class="max-h-[100px]">
                                <SheetClose asChild>
                                    <Button type="submit">Close</Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>

                    </Sheet>
                </div>
            </div>
        </div>
    </SharedAppSection>
</template>