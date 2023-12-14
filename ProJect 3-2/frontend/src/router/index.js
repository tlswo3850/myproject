import Vue from 'vue'
import VueRouter from 'vue-router'
import Pack from '../views/Pack.vue'
import About from '../views/About.vue'
import AboutFood from '../views/AboutFood.vue'
import bread from '../views/bread.vue'
import Route from '../views/Route.vue'
import Ock from '../views/Ock.vue'
import Reservation from '../views/Reservation.vue'
import King from '../views/King.vue'
import Tree from '../views/Tree.vue'
import Noodle from '../views/Noodle.vue'
import Dong from '../views/Dong.vue'
import Seol from '../views/Seol.vue'
import Alohanok from '../views/Alohanok.vue'
import Adobe from '../views/Adobe.vue'
import Rice from '../views/Rice.vue'
import Ganamji from '../views/Ganamji.vue'
import Pie from '../views/Pie.vue'
import Login from '../views/Login.vue'
import Fail from '../views/Fail.vue'
import Member from '../views/Member.vue'
//import Subscribe from '../views/Subscribe.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Login
  },
  {
    path: '/pack',
    name: 'Pack',
    component: Pack
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/member',
    name: 'Member',
    component: Member
  },
/*  {
    path: '/subscribe',
    name: 'Subscribe',
    component: Subscribe
  },*/
  {
    path: '/fail',
    name: 'Fail',
    component: Fail
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/aboutfood',
    name: 'AboutFood',
    component: AboutFood
  },
  {
    path: '/bread',
    name: 'bread',
    component: bread
  },
  {
    path: '/route',
    name: 'Route',
    component: Route
  },
  {
    path: '/ock',
    name: 'Ock',
    component: Ock
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: Reservation
  },
  {
    path: '/king',
    name: 'King',
    component: King
  },
  {
    path: '/tree',
    name: 'Tree',
    component: Tree
  },
  {
    path: '/noodle',
    name: 'Noodle',
    component: Noodle
  },
  {
    path: '/dong',
    name: 'Dong',
    component: Dong
  },
  {
    path: '/seol',
    name: 'Seol',
    component: Seol
  },
  {
    path: '/alohanok',
    name: 'Alohanok',
    component: Alohanok
  },
  {
    path: '/adobe',
    name: 'Adobe',
    component: Adobe
  },
  {
    path: '/rice',
    name: 'Rice',
    component: Rice
  },
  {
    path: '/ganamji',
    name: 'Ganamji',
    component: Ganamji
  },
  {
    path: '/pie',
    name: 'Pie',
    component: Pie
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
