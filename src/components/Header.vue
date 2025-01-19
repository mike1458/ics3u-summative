<script setup>
import { computed, onMounted } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { signOut } from 'firebase/auth';
import { useStore } from '../store';
import { auth } from '../firebase';

const route = useRoute();
const router = useRouter();
const store = useStore();
let currentUserEmail = store.user?.email || '';

const current = computed(() => route.path);
const movieRoute = computed(() => route.name === "movie" || route.path.startsWith('/movies/'));

const currentUserFirstName = computed(() => {
    const userAccount = currentUserEmail;
    const fullName = store.user.displayName.split(" ")
    console.log(currentUserEmail)
    return userAccount ? fullName[0] : '';
});

const logout = () => {
    store.user = null;
    signOut(auth);
    router.push(`/`);
}

</script>

<template>
    <div class="topnav">
        <div class="logo-container">
            <RouterLink v-if="store.currentUserEmail === ''" to="/">
                <img id="logo" src="../assets/logo.png">
            </RouterLink>
            <RouterLink v-if="store.currentUserEmail != ''" to="/movies">
                <img id="logo" src="../assets/logo.png">
            </RouterLink>
        </div>
        <div class="nav-links">
            <RouterLink v-if="current === '/register' || current === '/'" to="/login" class="nav-button">Sign In
            </RouterLink>
            <RouterLink v-if="current === '/login' || current === '/'" to="/register" class="nav-button">Register
            </RouterLink>
            <RouterLink v-if="movieRoute || current === '/settings' || current === '/movies'" to="/cart"
                class="nav-button">Cart</RouterLink>
            <RouterLink v-if="movieRoute || current === '/cart' || current === '/movies'" to="/settings"
                class="nav-button">Settings</RouterLink>
            <RouterLink v-if="movieRoute || current === '/settings' || current === '/cart' || current === '/movies'"
                @click.prevent="logout" to="/" class="nav-button">Logout</RouterLink>
        </div>
        <h5 v-if="store.user && currentUserFirstName" class="welcome-message"> Welcome, {{ currentUserFirstName }}!
        </h5>
    </div>
</template>

<style scoped>
.topnav {
    background-color: #1c1c1c;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 10px;
    position: relative;
    color: white;
}

.topnav .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.topnav #logo {
    height: 50px;
    width: auto;
    cursor: pointer;
}

.nav-links {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.nav-links a {
    color: #ffffff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #e50914;
}

.welcome-message {
    margin-top: 10px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
}

@media (max-width: 768px) {
    .topnav {
        padding: 10px;
    }

    .nav-links {
        justify-content: center;
    }

    .welcome-message {
        font-size: 1rem;
    }
}
</style>
