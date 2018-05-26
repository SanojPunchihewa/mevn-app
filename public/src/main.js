// Import System requirements
import Vue from 'vue'
import VueRouter from 'vue-router'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

// Import Views - Top level
import AppView from './components/App.vue'
import Login from './components/Login.vue'
import Dash from './components/Dash.vue'
import TablesView from './components/Tables.vue'
import ProfileView from './components/Profile.vue'

Vue.use(Vuetify, {
  theme: {
    primary: '#E53935', 
    secondary: '#FFCDD2', 
    accent: '#00E5FF' 
  }
})
Vue.use(VueRouter)

const routes = [
  {path: '/login', component: Login},
  {path: '/', component: Dash,
    children: [
      {
        path: 'table',
        component: TablesView,
        name: 'Dashboard',
        meta: {description: 'Overview of the Robots'}
      },
      {
        path: 'profile',
        component: ProfileView,
        name: 'Profile',
        meta: {description: 'Edit Your Profile Settings'}
      }
    ]
  }
];

// Routing logic
var router = new VueRouter({  
  routes: routes,
  mode: 'history'
  // linkExactActiveClass: 'active',
  // scrollBehavior: function(to, from, savedPosition) {
  //   return savedPosition || { x: 0, y: 0 }
  // }
})

new Vue({
  el: '#root',
  router: router,
  render: h => h(AppView)
})
