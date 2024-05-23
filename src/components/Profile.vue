<script>
import { useAuthStore} from "../stores/authStore.js";
import {mapState} from "pinia";

export default {
  name: 'Profile',
  data() {
    return {}
  },
  methods: {
    useAuthStore,
  },
  computed: {
    ...mapState(useAuthStore, ['user']),
  }
}
</script>

<template>
  <div class="card">
    <h1>Profile</h1>
    <router-link to="/" class="btn btn-link">Home</router-link>
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
    <button @click="useAuthStore().logout">Logout</button>
  </div>
</template>