import { createRouter, createWebHistory } from "vue-router";

import Home from './views/Home';
import Login from './views/login'
import Signup from './views/signup'
import CreatePlaylist from './views/createplaylist'

const routes = [   
    { 
        name: "Home",
        component: Home,
        path: '/',

    },
    { 
        name: "login",
        component: Login,
        path: '/login',

    },
    { 
        name: "signup",
        component: Signup,
        path: '/signup',

    },
    { 
        name: "CreatePlaylist",
        component: CreatePlaylist,
        path: '/createplaylist',

    },
    { 
        name: "UserPlaylists",
        component: '',
        path: '/UserPlaylists',

    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
export default router