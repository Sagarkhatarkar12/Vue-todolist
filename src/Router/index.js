import { createRouter, createWebHistory } from "vue-router";
import Home from "../Pages/TodoForm.vue";
import List from "../Pages/TodoList.vue"
import CompleteTask from "../Pages/CompleteTask.vue"
import Dynamic from "../Pages/Dynamic.vue"
import NoteFound from "@/Pages/NoteFound.vue";
import profile from "../Pages/profile.vue"
import post from "../Pages/post.vue"


const routes = [{
    path: '/',
    component: Home
},
{
    path: '/List',
    component: List
},
{
    path: '/CompleteTask',
    component: CompleteTask
},
{
    path: '/Dynamic/:id',
    component: Dynamic,
    children: [
        {
            path: 'profile',
            component: profile
        },
        {
            path: 'post',
            component: post
        }
    ]

},
{
    path: '/:pathMatch(.*)',
    component: NoteFound
}
]

const router = createRouter({
    history: createWebHistory(),
    routes,

})
export default router