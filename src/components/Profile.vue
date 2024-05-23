<script>
import { useAuthStore} from "../stores/authStore.js";
import {mapStores} from "pinia";

export default {
  name: 'Profile',
  data() {
    return {
      user: {
        name: 'John Doe',
        email: 'james@mail.com'
      }
    }
  },
  methods: {
    useAuthStore,
  }
}
</script>

<template>
  <div class="card">
    <h1>Profile</h1>
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
    <p>
      <span>{{ user }}</span>
    </p>
    <button class="btn btn-danger">Refresh</button>
    <button @click="useAuthStore().logout">Logout</button>
  </div>
</template>