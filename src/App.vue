<script>
import Form from './components/form.vue';
import List from './components/List.vue';
import Home from "./Pages/TodoForm.vue";
import NoteFound from './Pages/NoteFound.vue';
import ListItem from "./Pages/TodoList.vue";
import ListI from "./Pages/TodoListItem.vue";


const Routes = {
  '/': Home,
  '/List':ListItem,
  '/ListItem':ListI
  
}

export default {
  components: {
    Form,
    List,
  },


  data() {
    return {
      // data part 
   currentPath: window.location.hash,
     
    
    }


  },


  methods: {

    deleteItem(id) {
      this.task = this.task.filter(item => item.id !== id)
    },

    changeCheckBox(id) {
      console.log("id" + id)

      const Index = this.task.findIndex(t => t.id === id);
      // alert(taskItem)



      if (Index === -1) {
        return
      }
      this.task[Index].isComplete = !this.task[Index].isComplete;

    },
    addTask(inputValue) {

      this.task.push({ id: (this.task.length + 1), text: inputValue, isComplete: false })
      inputValue = ""
    }
  },


  computed: {
    currentView(){
return Routes[this.currentPath.slice(1)||'/'] ||NotFound
    },

    completeData() {
      return this.task.filter(t => t.isComplete == true)
    },
    renamingData() {
      return this.task.filter(t => t.isComplete == false)
    }
  },
      mounted(){
      window.addEventListener('hashchange',()=>{
        this.currentPath = window.location.hash
      })
    },
};



</script>

<template>

  <nav>
    <a href="#/">Home</a>
    <a href="#/List">LIst</a>
    <a href="#/ListItem">ListItem</a>
  </nav>
  <div class="todolist">
 <h1>Our todo App</h1>
  
    <component :is = currentView />
  </div>


</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  font-size: 62.5%;
}

.todolist {
  background-color: #ffffff;
  height: 100%;
  width: 40rem;
  border-radius: 1rem;
  margin: 4rem auto;
  padding: 1rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

h1 {
  font-size: 3rem;


  background-color: #799b44;
  padding: 1rem;
  color: white;
  border-radius: 1rem;
}
nav{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7rem;
  width: 100%;
  background-color: green;
  color: white;
  font-size: 3rem;
  gap: 3rem;
}
nav a{
  text-decoration: none;
  color: white;
}
</style>
