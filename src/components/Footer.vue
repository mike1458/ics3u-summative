<script setup>

</script>

<template>
    <footer>
        <p>&copy; 2024 Betterflix Inc. All Rights Reserved.</p>
        <a href="#privacy">Privacy Policy</a> |
        <a href="#terms">Terms of Service</a>
        <div class="social-media">
            <button class="icon-button"><img src="../assets/facebook.png" alt="Facebook" class="icon"></button>
            <button class="icon-button"><img src="../assets/x.png" alt="Twitter" class="icon"></button>
            <button class="icon-button"><img src="../assets/instagram.png" alt="Instagram" class="icon"></button>
            <button class="icon-button"><img src="../assets/youtube.png" alt="YouTube" class="icon"></button>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: #141414;
    color: white;
    padding: 20px 0;
    text-align: center;
}

.footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.social-media {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.icon-button {
    background-color: transparent;
    border: none;
    padding: 5px;
    cursor: pointer;
    transition: transform 0.3s;
}

.icon-button:hover {
    transform: scale(1.1);
}

.icon {
    width: 30px;
    height: 30px;
}
</style>