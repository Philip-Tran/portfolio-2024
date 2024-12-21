<script setup lang="ts">
import { contactPage } from '~/lib/content';
</script>

<template>
    <SharedAppSection :border-bottom=false :title="contactPage.title">
        <div>
            <p>{{ contactPage.message }}</p>
            <div><span>Email: </span>
                <span class="text-yellow-600">{{ contactPage.email }}</span>
            </div>
        </div>
    </SharedAppSection>
</template>