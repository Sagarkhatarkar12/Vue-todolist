<script>
// import { store } from "../store/store";
import { store } from "../store/store.js"
import ListItem from "./ListItem.vue"

export default {
    components: {
        ListItem,
    },
    data() {
        return {

        }
    },

    props: {
        task: {
            type: Array,
            requried: true
        },
        checkBox: {
            type: Function,
            requried: true

        },
        deleteItem:{
            type:Function,
            requried:true
        }
    },
    methods: {
  
    }

}

</script>

<template>

    <ul>

        <!-- {{ console.log(task) }} -->

        <!-- list item me loop insert karne per ye mulitiple time chalega jab tak puri value fetched na ho jaye -->

        <ListItem v-if="task.length > 0" v-for="item in task" :id=item.id :isComp=item.isComplete :text=item.text
            :deleteItem=deleteItem
            :checkBox=checkBox />

        <div v-else class="empty">
            <img src="../assets/folder.png" alt="">
            <p>No task</p>
        </div>

    </ul>

</template>

<style>
ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

img {
    height: 20rem;
    width: 15.5rem;
}

.empty {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: 600;
    font-size: 3rem;
    color: white;

}
</style>