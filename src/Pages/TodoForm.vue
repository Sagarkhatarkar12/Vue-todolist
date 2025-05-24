<script setup>
import {  PositionChange } from "../store/task.js";
import Form from "../components/form.vue";



    const tasks = PositionChange(); 
    
    const addTask = tasks.addTask;


  
 

   

// const tasks =  PositionChange();


</script>
<template>
<Form
:addTask= "addTask" />

</template>
<style>
</style>