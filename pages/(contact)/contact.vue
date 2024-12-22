<script setup lang="ts">
import { contactPage } from '~/lib/content';
</script>

<template>
    <SharedAppSection :border-bottom=false :title="contactPage.title">
        <div>
            <p>{{ contactPage.message }}</p>
            <div><span>Email: </span>
                <span class="text-yellow-600"> <a :href="`mailto:${contactPage.email}`"
                        class="text-yellow-600 hover:underline">
                        {{ contactPage.email }}
                    </a>
                </span>
            </div>
        </div>
    </SharedAppSection>
</template>