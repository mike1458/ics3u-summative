<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';

const response = ref(null);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

onMounted(async () => {
    response.value = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`);
    shuffleArray(response.value.data.results);
})
</script>

<template>
    <div class="flexbox-container">
        <div v-if="response" class="movie-list">
            <div v-for="movie in response.data.results.slice(0, 5)" :key="movie.id" class="flexbox-item"
                @click="getMovieDetails(movie.id)">
                <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster" />
                <p class="movie-title">{{ movie.title }}</p>
            </div>
        </div>
    </div>

    <div class="movie-gallery">
    </div>
</template>

<style scoped>
.flexbox-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    overflow-x: auto;
    white-space: nowrap;
}

.flexbox-item {
    display: inline-block;
    flex: 0 0 auto;
    text-align: center;
    width: 200px;
    margin: 0 10px;
    transition: transform 0.2s, box-shadow 0.2s;
}

.flexbox-item img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease;
}

.flexbox-item img:hover {
    transform: scale(1.05);
}

.flexbox-item .movie-title {
    margin-top: 10px;
    font-size: 1rem;
    color: white;
    font-weight: bold;
}
</style>