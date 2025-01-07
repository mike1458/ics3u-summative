<script setup>

import { RouterLink } from 'vue-router';

</script>

<template>
    <div id="hero">
        <h1>
            Stream Better, Live Better!
        </h1>
        <p>
            Our platform is completely free with no ads!
        </p>
        <RouterLink to="/register" class="button register"><button class="register-button" type="button">Sign up
                NOW!</button></RouterLink>
    </div>
</template>

<style scoped>
#hero {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('../assets/movie-background.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 650px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 20px;
    text-align: center;
    position: relative;
}

#hero h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

#hero p {
    font-size: 1.25rem;
    margin-bottom: 30px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.register-button {
    background-color: #ff0000;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    text-transform: uppercase;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s;
}

.register-button:hover {
    background-color: #cc0000;
    transform: scale(1.05);
}
</style>