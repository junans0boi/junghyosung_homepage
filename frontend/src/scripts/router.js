import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Cart from  "@/pages/Cart";
import Order from  "@/pages/Order.vue";
import Orders from  "@/pages/Orders.vue";
import AboutUs from '@/pages/AboutUs.vue';
import Admin from '@/pages/DashBoard.vue';
import ASInfo from '@/pages/ASInfo.vue';

import {createRouter, createWebHistory} from "vue-router/dist/vue-router";


const routes = [
    {path: '/aboutus', component: AboutUs},
    {path: '/dashboard', component: Admin},
    {path: '/asinfo', component: ASInfo},
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/signup', component: Signup},
    {path: '/cart', component: Cart},
    {path: '/order', component: Order},
    {path: '/orders', component: Orders},

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;