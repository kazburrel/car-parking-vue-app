<script setup>
import { RouterLink, RouterView } from "vue-router";
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
            <RouterLink class="text-decoration-none text-dark router-link" :to="{ name: 'home' }">
              Home
            </RouterLink>
          </li>
        </ul>
        <RouterLink class="text-decoration-none text-dark router-link" :to="{ name: 'register' }">
          Register
        </RouterLink>
      </div>
    </div>
  </nav>
  <!-- <header class="py-6 bg-gray-100 shadow">
    <div class="container md:px-2 px-4 mx-auto">
      <nav class="flex gap-4 justify-between">
        <div class="flex gap-4 items-center">
          <h2 class="text-xl font-bold">
            <div class="inline-flex items-center justify-center bg-blue-600 w-6 h-6 text-center text-white rounded">
              P
            </div>
            myParking
          </h2>
          <RouterLink class="router-link" :to="{ name: 'home' }">
            Home
          </RouterLink>
        </div>
        <div class="flex gap-4 items-center">
          <RouterLink class="router-link" :to="{ name: 'register' }">
            Register
          </RouterLink>
        </div>
      </nav>
    </div>
  </header> -->

  <div class="container md:px-2 px-4 pt-8 md:pt-16 mx-auto">
    <RouterView />
  </div>
</template>

<!-- <RouterLink class="router-link" :to="{ name: 'register' }"> -->
  <!-- <RouterLink class="router-link" :to="{ name: 'home' }"></RouterLink> -->