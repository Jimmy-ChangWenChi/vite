<template>
  這是購物車頁面
  <table class="table align-middle">
    <thead>
      <tr>
        <th></th>
        <th>品名</th>
        <th style="width: 150px">數量/單位</th>
        <th class="text-end">單價</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="cart.carts">
        <tr v-for="item in cart.carts" :key="item.id">
          <td>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="deleteCarItem(item)"
            >
              <i class="fas fa-spinner fa-pulse"></i>
              x
            </button>
          </td>
          <td>
            {{ item.product.title }}
            <div class="text-success">已套用優惠券</div>
          </td>
          <td>
            <div class="input-group input-group-sm">
              <div class="input-group mb-3">
                <input
                  min="1"
                  type="number"
                  class="form-control"
                  v-model="item.qty"
                  @change="updateCarItem(item)"
                />
                <span class="input-group-text" id="basic-addon2">{{
                  item.qty
                }}</span>
              </div>
            </div>
          </td>
          <td class="text-end">
            <small class="text-success">折扣價：</small>
            {{ item.total }}
          </td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="text-end">總計</td>
        <td class="text-end">{{ cart.total }}</td>
      </tr>
      <tr>
        <td colspan="3" class="text-end text-success">折扣價</td>
        <td class="text-end text-success">{{ cart.final_total }}</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>

const { VITE_APP_URL,VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      apiUrl: "https://vue3-course-api.hexschool.io/v2",
      path: "jimmychang",
      productId: "",
      cart: {},
      order: {
        user: {
          email: "",
          name: "",
          tel: "",
          address: "",
        },
        message: "",
      },
      resetData: {
        user: {
          email: "",
          name: "",
          tel: "",
          address: "",
        },
        message: "",
      },
    };
  },
  methods: {
    getCar() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          this.cart = res.data.data;
          //console.log(this.cart)
        })
        .catch((err) => {
          alert("購物車失敗");
        });
    },
    updateCarItem(item) {
      const data = {
        product_id: item.product.id,
        qty: item.qty,
      };
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`;
      this.$http
        .put(url, { data })
        .then((res) => {
          alert("更新成功");
          this.getCar();
        })
        .catch((err) => {
          alert("更新失敗");
        });
    },
    deleteCarItem(item) {
      let url = "";
      if (item.id) {
        url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`;
      } else {
        url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/carts`;
      }
      this.$http
        .delete(url)
        .then((res) => {
          alert("刪除成功");
          this.getCar();
        })
        .catch((err) => {
          alert("刪除失敗");
        });
    },
    onSubmit() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/order`;
      this.$http
        .post(url, { data: this.order })
        .then((res) => {
          alert("結帳成功");
          this.getCar();
          //this.$refs.form.resetForm();
          this.order = this.resetData;
        })
        .catch((err) => {
          alert("結帳失敗");
        });
    },
  },
  mounted() {
    this.getCar();
  },
  components: {
    // VForm: Form,
    // VField: Field,
    // ErrorMessage: ErrorMessage,
  },
};
</script>