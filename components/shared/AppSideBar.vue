<script setup lang="ts">
import { AppData } from "~/lib/app"
import { mainMenu } from "~/lib/menus"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarFooter
} from "~/components/ui/sidebar"

</script>

<template>
    <Sidebar class="bg-dark text-text border-r-text border-opacity-25 ">
        <SidebarHeader class="p-0">
            <SidebarMenu class="border-b-[0.2px] border-opacity-25 border-text ">
                <SidebarMenuItem>
                    <div class="min-h-32 py-6 xl:py-8 xl:px-8 px-5">
                        <div>
                            <NuxtLink to="/" class="">
                                <h3 class="text-white text-2xl mb-1 hover:text-orange-400">{{ AppData.logo_text }}</h3>
                                <p>Web Developer</p>
                            </NuxtLink>
                        </div>
                    </div>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup class="p-0 ">
                <SidebarGroupContent>
                    <nav>
                        <SidebarMenu class="gap-0">
                            <SidebarMenuItem v-for="item in mainMenu" :key="item.label"
                                class="rounded-none  hover:bg-text hover:text-white hover:bg-opacity-10">
                                <SidebarMenuButton asChild class="min-h-10 rounded-none">
                                    <NuxtLink :to="item.url" active-class="text-white" :external="item.isExternal"
                                        class="flex items-center justify-start min-h-16 space-x-3 px-7 py-5 border-b-[0.2px]
                                        border-text border-opacity-25">
                                        <component :is="item.icon" />
                                        <span class="text-lg">{{ item.label }}</span>
                                    </NuxtLink>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </nav>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
        </SidebarFooter>
    </Sidebar>
</template>