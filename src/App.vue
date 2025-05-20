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
  task:[
    {id:1,text:"hii guys name jante hoge",isComplete:true},
    {id:2,text:"Hello bhai  me jante hoge", isComplete:false},
    {id:3,text:"hum nahi jaante toh ", isComplete:true}
  ]
}

},
props:{
name:"task",
// task:task

},
methods:{
  writeText(){
    this.newTodo = "Hii I am Sagu";
  }
}
};

</script>

<template>
 <div class="todolist">
  <h1>Todo List</h1>
  <!-- <h1>{{ task }}</h1> -->
   <Form />
   <h1>Complete task</h1>

    <List :task  = task />
    <h1>Remaing task</h1>
    <List/>
 </div>
 

 


</template>

<style >
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  font-size: 62.5%;
}

.todolist{
  background-color: #7fac96;
  height: 100%;
  width: 1000px;
  border-radius: 1rem;
  margin: 15rem auto;
  padding: 1rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
h1{
  font-size: 3rem;
  

  background-color:   #799b44;
  padding: 1rem;
  color: white;
  border-radius: 1rem;
}


</style>
