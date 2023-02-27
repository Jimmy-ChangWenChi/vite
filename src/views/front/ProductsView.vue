<template>
    這是產品頁面
    <table class="table">
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{product.title}}</td>
                <td><img :src="product.imageUrl" alt=""></td>
                <td>
                    <router-link :to="`/product/${product.id}`">連結單一產品</router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { RouterLink } from "vue-router"
const { VITE_APP_URL,VITE_APP_PATH } = import.meta.env;

export default {
    data(){
        return {
            products:[]
        }
    },
    components:{
        RouterLink
    },
    methods:{
        getProducts(){
            
        },

    },
    mounted(){
        //this.getProducts()
    }
}
</script>