import Vue from 'vue'
import Router from 'vue-router'
import ItemCollection from './components/ItemCollection'
import SingleItem from './components/SingleItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name: 'home',
      component: ItemCollection
    },
    {
      path:'/item/:id',
      name: 'item',
      props: true,
      component: SingleItem
    },
  ]
})