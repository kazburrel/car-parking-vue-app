<script setup>
import { onBeforeUnmount } from "vue";
import { useRegister } from "@/stores/register";

const store = useRegister();

onBeforeUnmount(store.resetForm);
</script>

<template>
    <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-6 p-5">
                <form @submit.prevent="store.handleSubmit" novalidate>
                    <div class="row h-100 justify-content-center align-items-center">
                        <div class="mb-3">
                            <label class="form-label">Name</label>
                            <input type="text" v-model="store.form.name" id="name" name="name" class="form-control"
                                autocomplete="name" required aria-describedby="emailHelp" :disabled="store.loading">
                            <ValidationError :errors="store.errors" field="name" />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" v-model="store.form.email" id="email" name="email" class="form-control"
                                autocomplete="email" required aria-describedby="emailHelp" :disabled="store.loading">
                            <ValidationError :errors="store.errors" field="email" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" name="password" v-model="store.form.password" id="password"
                                class="form-control" required :disabled="store.loading">
                            <ValidationError :errors="store.errors" field="password" />
                        </div>
                        <div class="mb-3">
                            <label for="password_confirmation" class="form-label">Confirm Password</label>
                            <input type="password" id="password_confirmation" v-model="store.form.password_confirmation"
                                name="password_confirmation" class="form-control" required :disabled="store.loading">
                        </div>

                        <button type="submit" class="btn btn-primary">
                            <IconSpinner v-show="store.loading" />
                            
                            Register
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>