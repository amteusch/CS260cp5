import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Register from './views/Register.vue'
import OneCorinthians from './views/1Corinthians.vue'
import TwoCorinthians from './views/2Corinthians.vue'
import Login from './views/Login.vue'
import Colossians from './views/Colossians.vue'
import Ephesians from './views/Ephesians.vue'
import Galatians from './views/Galatians.vue'
import Philemon from './views/Philemon.vue'
import Philippians from './views/Philippians.vue'
import OneThessalonians from './views/1Thessalonians.vue'
import TwoThessalonians from './views/2Thessalonians.vue'
import OneTimothy from './views/1Timothy.vue'
import TwoTimothy from './views/2Timothy.vue'
import Romans from './views/Romans.vue'
import Titus from './views/Titus.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: '/romans',
      name: 'romans',
      component: Romans,
    },
    {
      path: '/1corinthians',
      name: 'onecorinthians',
      component: OneCorinthians,
    },
    {
      path: '/2corinthians',
      name: 'twocorinthians',
      component: TwoCorinthians,
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/colossians',
      name: 'colossians',
      component: Colossians,
    },
    {
      path: '/ephesians',
      name: 'ephesians',
      component: Ephesians,
    },
    {
      path: '/galatians',
      name: 'galatians',
      component: Galatians,
    },
    {
      path: '/philemon',
      name: 'philemon',
      component: Philemon,
    },
    {
      path: '/philippians',
      name: 'philippians',
      component: Philippians,
    },
    {
      path: '/1thessalonians',
      name: 'onethessalonians',
      component: OneThessalonians,
    },
    {
      path: '/2thessalonians',
      name: 'twothessalonians',
      component: TwoThessalonians,
    },
    {
      path: '/1timothy',
      name: 'onetimothy',
      component: OneTimothy,
    },
    {
      path: '/2timothy',
      name: 'twotimothy',
      component: TwoTimothy,
    },
    {
      path: '/titus',
      name: 'titus',
      component: Titus,
    }
  ]
});