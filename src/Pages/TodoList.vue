<script setup>
import List from "../components/List.vue"
// import{ store }from "../store/store.js"
import { PositionChange } from "../store/task.js";
import { computed } from "vue";



const tasks = PositionChange();

 
  
   
    
    
   

   
const RenamingData = computed(() => {
  return tasks.task.filter(t => t.isComplete === false)
})

      
  

</script>
<template>
    <!-- <h1>Hellow</h1> -->
    <List :task=RenamingData
    :checkBox = tasks.changeCheckBox
    :deleteItem=tasks.deleteItem />
</template>
<style></style>