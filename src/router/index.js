import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Photography from '../views/Photography.vue'
import Illustrations from '../views/Illustrations.vue'
import Experience from '../views/ExperienceAtUnity.vue'
import SideProjects from '../views/SideProjects.vue'
import CV from '../views/CV.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hobbies/photography',
    name: 'Photography',
    component: Photography
  },
  {
    path: '/hobbies/illustrations',
    name: 'Illustrations',
    component: Illustrations
  },
  {
    path: '/experience',
    name: 'Experience at Unity',
    component: Experience
  },
  {
    path: '/projects',
    name: 'Side Projects',
    component: SideProjects
  },
  {
    path: '/cv',
    name: 'CV',
    component: CV
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
