import { createWebHistory, createRouter } from 'vue-router';

import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Products from '@/components/Products.vue';
import Contact from '@/components/Contact.vue';
import Cart from '@/components/Cart.vue';
import Aboutme from '@/components/Aboutme.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/about me',
        name: 'Aboutme',
        component: Aboutme
    },
    {
        path: '/product',
        name: 'Product',
        component: Products
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
