import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // ссылка на url компонента app.vue 
      name: 'home', // имя ссылки
      component: HomeView // ссылка на сам компонент (тут пришла из импортов выше)
    },
    {
      path: '/about', // ссылка на url компонента app.vue 
      name: 'about', // имя ссылки

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // Разделение кода на уровне маршрута
      // Для этого маршрута создается отдельный чанк (About.[hash].js)
      // который лениво загружается при посещении маршрута.
      // сайт загружается быстрее но медленее ссылки (VIEWS)
      component: () => import('../views/AboutView.vue') // ссылка на сам компонент
    }
  ]
})

export default router // экспорт по умолчанию
