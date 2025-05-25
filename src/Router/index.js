import { createRouter, createWebHistory } from "vue-router";
import Home from "../Pages/TodoForm.vue";
import List from "../Pages/TodoList.vue"
import CompleteTask from "../Pages/CompleteTask.vue"
// const routes = [

//     {
//         path: '/',
//         name: 'Home',
//         component: Home
//     },
//     {
//         path: '/about',
//         name: 'About',
//         component: List
//     }, {
//         path: '/contact',
//         name: 'Contact',
//         component: CompleteTask
//     }
// ]
const routes = [{path:'/',

    component : Home
},
{
path :'/List',

component:List
},
{
    path:'/CompleteTask',
   
    component:CompleteTask
}

]
const router = createRouter({
    history:createWebHistory(),
    routes,

})
export default router