<template>
    這是前台頁面
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>  |
    <router-link to="/products">產品頁面</router-link>  |
    <router-link to="/cart">購物車頁面</router-link>    |
    <router-link to="/login">登入頁面</router-link>    |
    <router-link to="/admin/products">後臺產品頁面</router-link>
    <hr>
    <RouterView></RouterView>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
    components: {
        RouterView
    }
}
</script>
