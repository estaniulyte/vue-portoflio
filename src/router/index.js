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
    path: '/hobbies/photography',
    name: 'Photography',
    component: Photography
  },
  {
    path: '/hobbies/graphicdesign',
    name: 'Graphics Design',
    component: Illustrations
  },
  {
    path: '/experience',
    name: 'Experience',
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
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
