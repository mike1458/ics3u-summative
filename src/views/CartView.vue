<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { useStore } from '../store';

const store = useStore();

function removeFromCart(movie) {
  store.cart.delete(movie);
  localStorage.setItem(
    `cart_${store.user.email}`,
    JSON.stringify(Object.fromEntries(store.cart))
  );
}

function checkout() {
  store.cart.clear()
  localStorage.setItem(
    `cart_${store.user.email}`,
    JSON.stringify(Object.fromEntries(store.cart))
  )
  alert("Thank you for your purchase!")
}

</script>

<template>
  <Header />
  <div class="cart">
    <h1>Shopping Cart</h1>
    <div class="item" v-for="([key, value]) in store.cart">
      <img :src="`https://image.tmdb.org/t/p/w500${value.title.url}`" />
      <h1>{{ value.title.title }}</h1>
      <button @click="removeFromCart(key)">Remove</button>
    </div>
    <button class="btn btn-success" @click="checkout">Checkout</button>
  </div>
  <Footer />
</template>

<style scoped>
h1 {
    color: #e50914;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
}

button {
    padding: 8px 12px;
    background-color: #e50914;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
}

button:hover {
    background-color: #b20710;
    transform: scale(1.05);
}

.cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    background-color: #141414;
    padding: 20px;
    border-radius: 10px;
    max-width: 800px;
    margin: 0 auto;
}

.item {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: #222;
    padding: 10px;
    border-radius: 8px;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

img {
    width: 80px;
    height: auto;
    border-radius: 8px;
}

@media (max-width: 768px) {
    .cart {
        padding: 15px;
    }

    .item {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    img {
        width: 100px;
    }

    button {
        width: 100%;
    }
}
</style>