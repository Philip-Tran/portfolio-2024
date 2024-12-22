<script lang="ts" setup>
import AppSideBar from '~/components/shared/AppSideBar.vue';
import { SidebarProvider, SidebarTrigger } from '~/components/ui/sidebar';
</script>

<template>
    <SidebarProvider>
        <AppSideBar />
        <main class="w-full min-h-screen bg-dark text-white">
            <SharedAppHeader class="lg:hidden" />
            <div class="w-full">
                <slot />
            </div>
            <SharedAppFooter />
        </main>
    </SidebarProvider>
</template>