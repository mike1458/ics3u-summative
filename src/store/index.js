import { ref } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore('store', () => {
    const accounts = ref(new Map());
    const currentUserEmail = ref("");
    const email = ref("");
    const cart = ref(new Map());
    const firstName = ref("");
    const lastName = ref("");

    const addAccount = (email, details) => {
        accounts.value.set(email, details);
    }

    const addToCart = (id, movieData) => {
        cart.value.set(id, movieData);
    }

    const removeFromCart = (id) => {
        cart.value.delete(id);
    }

    const updateNames = (newFirstName, newLastName) => {
        firstName.value = newFirstName;
        lastName.value = newLastName;
    };

    return { accounts, currentUserEmail, email, cart, firstName, lastName, addAccount, addToCart, removeFromCart, updateNames };
});