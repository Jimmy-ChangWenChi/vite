<template>
    這是產品頁面
    <table class="table">
        
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product.title }}</td>
                <td><img :src="product.imageUrl" width="100" alt=""></td>
                <td>
                    <router-link :to="`/product/${product.id}`"
                    class="btn btn-outline-secondary">連結單一產品</router-link>
                    <button type="button" class="btn btn-outline-primary"
                    @click="addToCart(product.id)">加入購物車</button>
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
            this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
            .then((res)=>{
                this.products = res.data.products
            })
        },
        addToCart(id){
            const data = {
                product_id:id,
                qty:1
            }
            this.$http.post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`,{ data })
            .then((res) => {
                alert("加入成功")
            })
        },
    },
    mounted(){
        this.getProducts()
    }
}
</script>