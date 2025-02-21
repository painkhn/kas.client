<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import Layout from '@/Layouts/MainLayout.vue';
import HomeGuest from './Home/HomeGuest.vue';
import HomeAuth from './Home/HomeAuth.vue';
</script>

<template>

    <Head title="Main page" />

    <Layout>
        <HomeGuest v-if="!$page.props.auth.user" />
        <HomeAuth v-if="$page.props.auth.user" />
    </Layout>
</template>

<style scoped>
.h-main {
    height: calc(100vh - 150px);
}
</style>
