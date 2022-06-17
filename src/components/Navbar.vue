<script setup>
import Buscador from './Buscador.vue';
</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body rounded">
        <div class="container-fluid">
            <router-link class="navbar-brand" :to="{ name: 'Home' }">
                <img alt="Vue logo" src="/logo_black.png" id="logo" />
            </router-link>
            <Buscador></Buscador>
        </div>
    </nav>
</template>


<style>
@import "../assets/base.css";

.nav {
    width: auto;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: #f1f1f1;
}

#logo {
    width: 20rem;
    max-height: auto;
}

#buscador,
#basic-addon1 {
    background-color: #f6f6f6;
}

.form-control {
    border-radius: 0.75rem;
}
</style>