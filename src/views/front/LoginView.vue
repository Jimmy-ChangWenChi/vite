<template>
  這是登入頁面
  <form id="form" class="form-signin">
    <div class="form-floating mb-3">
      <input
        type="email"
        class="form-control"
        v-model="user.username"
        id="floatingInput"
        placeholder="name@example.com"
        required
        autofocus
      />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input
        type="password"
        class="form-control"
        v-model="user.password"
        id="floatingPassword"
        placeholder="Password"
        required
      />
      <label for="floatingPassword">Password</label>
    </div>
    <button
      class="btn btn-lg btn-primary w-100 mt-3"
      type="button"
      v-on:click="login"
    >
      登入
    </button>
  </form>
</template>


<script>
const { VITE_APP_URL,VITE_APP_PATH } = import.meta.env;

export default {
    data(){
        return {
            user: {
                username:"",
                password:""
            },
            test:"test"
        }
    },
    methods: {
        login(){
            //const apiPath = "https://vue3-course-api.hexschool.io/v2/admin/signin";
            const apiPath = `${VITE_APP_URL}/v2/admin/signin`;
            
            this.$http.post(apiPath,this.user)
            .then((res) => {
                const { token,expired } = res.data;
                document.cookie = `JimmyToken=${token};expired=${new Date(expired)}; `;
                //window.location = `upload_image.html`;
                this.$router.push("/admin/products")
            })
            .catch((err)=>{
                alert(err.response.data.message);
            })
        },
    }
};
</script>