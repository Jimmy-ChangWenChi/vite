<template>
    這是後台頁面
    <router-link to="/admin/products">後臺產品列表</router-link> |
    <router-link to="/admin/orders">後臺訂單列表</router-link> |
    <router-link to="/">回前台首頁</router-link> |
    <a href="#" @click.prevent="logout">登出</a>
    <hr>
    <RouterView></RouterView>
</template>

<script>

import { RouterView } from 'vue-router'
const { VITE_APP_URL } = import.meta.env;

export default {
    components: {
        RouterView
    },
    methods: {
        logout(){
            document.cookie = `JimmyToken=;expired=${new Date()}; `;
            this.$router.push("/login")
        },
        checkAdmin(){
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)JimmyToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
            this.$http.defaults.headers.common.Authorization = token;

            const url = `${VITE_APP_URL}/api/user/check`;
            this.$http.post(url)
            .then((res) =>{
              if(!res.data.success){
                  this.$router.push("/login")
              }  
            })
        },
    },
    mounted(){
        this.checkAdmin()
    }
}
</script>