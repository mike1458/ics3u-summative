<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { auth } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ref } from 'vue';
import { useStore } from "../store/index";
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const store = useStore();
const router = useRouter();
const email = ref('');
const password = ref('');

const loginByEmail = async () => {
    try {
        console.log(email.value)
        const user = (await signInWithEmailAndPassword(auth, email.value, password.value)).user;
        store.user = user;
        router.push("/movies");
    } catch (error) {
        console.log(error);
        alert("There was an error signing in with email!");
    }
};

const loginByGoogle = async () => {
    try {
        const user = (await signInWithPopup(auth, new GoogleAuthProvider())).user;
        store.user = user;
        router.push("/movies/all");
    } catch (error) {
        alert("There was an error signing in with Google!");
    }
};
</script>

<template>
    <Header />
    <div class="hero">
        <div class="overlay">
            <div class="form-container">
                <h2>Login to Your Account</h2>
                <form @submit.prevent="handleLogin">
                    <div>
                        <input type="email" placeholder="Email" class="input-field" required />
                    </div>
                    <div>
                        <input v-model:="password" type="password" placeholder="Password" class="input-field"
                            required />
                    </div>
                    <div class="button-group">
                        <button type="submit" class="button login">Login</button>
                        <button type="button" class="button google" @click="loginByGoogle">Login with Google</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <Footer />
</template>

<style scoped>
.overlay {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('../assets/movie-background.png');
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 20px;
}

.navbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
}

.navbar h1 {
    font-size: 2rem;
}

.navbar .register {
    background-color: #e50914;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.navbar .register:hover {
    background-color: #f40612;
}

.form-container {
    text-align: center;
    margin-top: 50px;
}

.form-container h2 {
    font-size: 2rem;
    margin-bottom: 20px;
}

.input-field {
    padding: 15px;
    width: 300px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 15px;
    transition: border-color 0.3s;
}

.input-field:focus {
    border-color: #e50914;
    outline: none;
}

.button-group {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
}

.login,
.google {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
}

.login {
    background-color: #e50914;
    color: white;
}

.login:hover {
    background-color: #f40612;
    transform: scale(1.05);
}

.google {
    background-color: #4285F4;
    color: white;
}

.google:hover {
    background-color: #357ae8;
    transform: scale(1.05);
}

@media (max-width: 600px) {
    .button-group {
        flex-direction: column;
        gap: 10px;
    }

    .input-field {
        width: 90%;
    }

    .navbar h1 {
        font-size: 1.5rem;
    }
}
</style>