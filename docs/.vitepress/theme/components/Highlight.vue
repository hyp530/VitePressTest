<script setup lang="ts">
import { onMounted } from 'vue'

const hash = window.location.hash.replace(/^#/, '')

onMounted(() => {
    if (hash) {
        const ele = document.getElementById(hash) as HTMLElement
        ele.style.color = "red"
    }
})
</script>
<template>
    
</template>