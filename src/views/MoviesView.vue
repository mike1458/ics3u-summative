<script setup>
import Genres from "../components/Genres.vue";
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const genresList = [
  {
    id: 28,
    genreName: "Action"
  },
  {
    id: 12,
    genreName: "Adventure"
  },
  {
    id: 16,
    genreName: "Animation"
  },
  {
    id: 35,
    genreName: "Comedy"
  },
  {
    id: 10751,
    genreName: "Family"
  },
  {
    id: 14,
    genreName: "Fantasy"
  },
  {
    id: 36,
    genreName: "History"
  },
  {
    id: 878,
    genreName: "Sci-Fi"
  }
]
</script>

<template>
  <Header />
  <Genres :genres="genresList" />
  <Footer />
</template>

<style scoped></style>