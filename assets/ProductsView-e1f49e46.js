import{_ as h,e as m,r as P,o as s,c as n,a as r,d as t,F as c,f as b,t as $,b as f,w as T}from"./index-3caa7e55.js";const{VITE_APP_URL:l,VITE_APP_PATH:d}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"jimmychang",BASE_URL:"/vite/",MODE:"production",DEV:!1,PROD:!0},V={data(){return{products:[]}},components:{RouterLink:m},methods:{getProducts(){this.$http.get(`${l}/v2/api/${d}/products/all`).then(o=>{this.products=o.data.products})},addToCart(o){const a={product_id:o,qty:1};this.$http.post(`${l}/v2/api/${d}/cart`,{data:a}).then(i=>{alert("加入成功")})}},mounted(){this.getProducts()}},g={class:"table"},k=["src"],y=["onClick"];function E(o,a,i,A,u,_){const p=P("router-link");return s(),n(c,null,[r(" 這是產品頁面 "),t("table",g,[t("tbody",null,[(s(!0),n(c,null,b(u.products,e=>(s(),n("tr",{key:e.id},[t("td",null,$(e.title),1),t("td",null,[t("img",{src:e.imageUrl,width:"100",alt:""},null,8,k)]),t("td",null,[f(p,{to:`/product/${e.id}`,class:"btn btn-outline-secondary"},{default:T(()=>[r("連結單一產品")]),_:2},1032,["to"]),t("button",{type:"button",class:"btn btn-outline-primary",onClick:v=>_.addToCart(e.id)},"加入購物車",8,y)])]))),128))])])],64)}const C=h(V,[["render",E]]);export{C as default};
