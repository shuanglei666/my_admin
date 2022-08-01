import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
// 导入admin子路由
import ChainManagement from '@/views/Home/chainManagement';
import TokenManagement from '@/views/Home/tokenManagement';
// import TokenHolders from '@/views/Home/tokenHolders';




const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        children: [{
                path: 'chainManagement',
                component: ChainManagement,
            },
            {
                path: 'tokenManagement',
                component: TokenManagement,
            },
            // {
            //     path: 'tokenHolders',
            //     name: 'TokenHolders',
            //     component: TokenHolders,
            // },
        ]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router