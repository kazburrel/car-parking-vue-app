<script setup>
import { RouterLink, RouterView } from "vue-router";

import { useAuth } from "@/stores/auth";

const auth = useAuth();
</script>
 
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary p-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <template v-if="auth.check">
              <RouterLink class="router-link text-decoration-none text-dark" :to="{ name: 'vehicles.index' }">
                Vehicles
              </RouterLink>
            </template>
            <template v-else>
              <RouterLink class="router-link text-decoration-none text-dark" :to="{ name: 'home' }">
                Home
              </RouterLink>
            </template>
          </li>
        </ul>
        <template v-if="auth.check">
          <button @click="auth.logout" class="router-link btn btn-danger">Logout</button>
        </template>
        <template v-else>
          <RouterLink class="router-link text-decoration-none text-dark" :to="{ name: 'login' }">
            Login
          </RouterLink>
           <RouterLink class="router-link text-decoration-none text-dark" :to="{ name: 'register' }">
            Register
          </RouterLink>
        </template>
      </div>
    </div>
  </nav>
  <div class="container md:px-2 px-4 pt-8 md:pt-16 mx-auto">
    <RouterView />
  </div>
</template>