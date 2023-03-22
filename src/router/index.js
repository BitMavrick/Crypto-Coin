import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/pages/Home.vue'
import AboutView from '../views/pages/About.vue'
import ServiceView from '../views/pages/Service.vue'
import RoadmapView from '../views/pages/Roadmap.vue'
import ContactView from '../views/pages/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/service',
    name: 'service',
    component: ServiceView
  },
  {
    path: '/roadmap',
    name: 'roadmap',
    component: RoadmapView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
