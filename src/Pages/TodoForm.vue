<script>
import { store } from "../store/store.js"
import Form from "../components/form.vue"

export default {
    components:{
        Form
    },
    methods:{
        
    addTask(inputValue) {

      store.task.push({ id: (store.task.length + 1), text: inputValue, isComplete: false })
      inputValue = ""
    }
    }
}

</script>
<template>
<Form
:addTask=addTask />

</template>
<style>
</style>