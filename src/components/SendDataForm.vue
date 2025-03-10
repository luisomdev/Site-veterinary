<script setup lang="ts">
import { Icon } from '@iconify/vue'
import Card from './ui/card/Card.vue';
import { defineProps } from 'vue';

const props = defineProps({
  status: {
    type: Boolean,
    required: true
  },
});

</script>

<template>

    <Card class="w-full h-full absolute top-0 rounded-lg flex justify-center items-center flex-col">

        <Icon icon="mdi:check-circle" class="text-5xl text-green-600" />
        <div class="h-2"></div>
        <h3 class="text-2xl"> Send email </h3>

    </Card>

</template>