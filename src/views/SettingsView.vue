<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { useStore } from '../store';
import { useRouter } from 'vue-router';
import { auth } from "../firebase";
import { updateProfile } from "firebase/auth";
import { ref, onMounted } from 'vue';

const router = useRouter();
const store = useStore();
const firstName = ref('');
const lastName = ref('');
const email = ref('');
let user = auth.currentUser;

onMounted(() => {
  const fullName = store.user.displayName.split(" ")
  firstName.value = fullName[0] || '';
  lastName.value = fullName[1] || '';
  email.value = store.user.email || '';
});

function checkSignInMethod() {
  const user = auth.currentUser;

  if (user) {
    const providers = user.providerData;

    providers.forEach((provider) => {
      if (provider.providerId === "google.com") {
        alert("You are logged in with Google. Only users logged in via email can change their account information.");
        router.push("/movies");
      }
    });
  }
}

function saveChanges() {
  updateProfile(user, { displayName: `${firstName.value} ${lastName.value}` });
  alert('Changes saved');
}

checkSignInMethod()
</script>

<template>
  <div class="layout">
    <Header />
    <div class="settings-container">
      <div class="settings-input">
        <h2>Settings</h2>
        <div>
          <h4>First Name</h4>
          <input v-model="firstName" type="text" class="input-field" required />
        </div>
        <div>
          <h4>Last Name</h4>
          <input v-model="lastName" type="text" placeholder="Last Name" class="input-field" required />
        </div>
        <div>
          <h4>Email</h4>
          <input v-model="email" type="email" placeholder="Email" class="input-field-email" disabled />
        </div>
        <button class="btn btn-primary" @click="saveChanges">Save Changes</button>
      </div>
    </div>
    <Footer />
  </div>
</template>


<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #141414;
  color: white;
  font-family: Arial, sans-serif;
}

.settings-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.settings-input {
  max-width: 500px;
  width: 100%;
  background-color: #1c1c1c;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
  text-align: left;
}

.settings-input h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.8rem;
  color: #e50914;
}

.settings-input h4 {
  font-size: 1rem;
  margin-bottom: 8px;
  color: #ffffff;
  font-weight: bold;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1rem;
  border: 2px solid #444;
  border-radius: 5px;
  background-color: #333;
  color: white;
  outline: none;
  transition: border-color 0.3s;
}

.input-field:focus {
  border-color: #e50914;
}

.btn-primary {
  width: 100%;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #e50914;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s, transform 0.2s;
}

.btn-primary:hover {
  background-color: #b20710;
  transform: scale(1.02);
}

.btn-primary:active {
  transform: scale(0.98);
}

@media (max-width: 768px) {
  .settings-container {
    padding: 10px;
  }

  .settings-input {
    padding: 15px;
  }

  .btn-primary {
    font-size: 0.9rem;
  }

  .input-field {
    font-size: 0.9rem;
  }
}

.input-field-email {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1rem;
  border: 2px solid #444;
  border-radius: 5px;
  background-color: #2a2a2a;
  color: #999;
  outline: none;
  cursor: not-allowed;
}

.input-field-email:disabled {
  border-color: #555;
  background-color: #1f1f1f;
  color: #666;
}
</style>
