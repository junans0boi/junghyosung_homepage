import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Cart from  "@/pages/Cart";
import Order from  "@/pages/Order.vue";
import Orders from  "@/pages/Orders.vue";
import AboutUs from '@/pages/AboutUs.vue';
import Admin from '@/pages/Admin/DashBoard.vue';
import Admin_login from '@/pages/Admin/Admin_login.vue';
import Admin_users from '@/pages/Admin/Admin_users.vue';
import Admin_orders from '@/pages/Admin/Admin_orders.vue';
import ASInfo from '@/pages/ASInfo.vue';
import Profile from '@/pages/Profile.vue';
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";


const routes = [
    {path: '/aboutus', component: AboutUs},
    {path: '/dashboard/Admin_login', component: Admin_login},
    {path: '/dashboard', component: Admin},
    {path: '/dashboard/user', component: Admin_users},
    {path: '/dashboard/order', component: Admin_orders},
    {path: '/asinfo', component: ASInfo},
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/signup', component: Signup},
    {path: '/cart', component: Cart},
    {path: '/order', component: Order},
    {path: '/orders', component: Orders},
    {path: '/profile', component: Profile},

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;