
<script setup>
import { computed } from 'vue';
import List from '../components/List.vue';
import { PositionChange } from '@/store/task';
import{ store }from "../store/store.js"
const tasks= PositionChange();




  
                  const  CompleteData =computed (()=>{
return tasks.task.filter(t => t.isComplete == true)
                   }) 
      
   
    

 
       
     



</script>
<template>
 
<List :task = CompleteData 
:checkBox = tasks.changeCheckBox
:deleteItem=tasks.deleteItem />
</template>
<style>
</style>
