<script>
import Form from './components/form.vue';
import List from './components/List.vue';
export default {
  components:{
    Form,
    List,
  },
  data(){
return {
  // data part 
  newTodo :"Hiii sagar khatarkar"
}
},
methods:{
  writeText(){
    this.newTodo = "Hii I am Sagu";
  }
}
};

</script>

<template>
  <div>
    <Form />
    <List/>

 


  </div>
</template>

<style scoped>

</style>
