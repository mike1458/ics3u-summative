import { ref } from "vue";
import { defineStore } from "pinia";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const useStore = defineStore('store', () => {
    const user = ref(null);
    const cart = ref(new Map());

    return { cart, user };
});

export const userAuthorized = new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
        try {
            const store = useStore();

            if (user) {
                store.user = user;
                const storedCart = localStorage.getItem(`cart_${store.user.email}`);
                store.cart = storedCart ? new Map(Object.entries(JSON.parse(storedCart))) : new Map();
                console.log("User is authorized and data is loaded.");
                resolve();
            } else {
                resolve();
            }
        } catch (error) {
            console.error("Error during authorization:", error);
            reject(error);
        }
    });
});