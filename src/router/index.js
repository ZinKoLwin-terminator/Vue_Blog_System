import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import CreateView from '../views/CreateView.vue'
import TagView from '../views/TagView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/posts/:id',
    name: 'detail',
    component: DetailView,
    props:true
  },
  {
    path: "/create",
    name: "create",
    component:CreateView
  },
  {
    path: "/tags/:tag",
    name: "tag",
    component: TagView,
    props:true
    
  }
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
