<script>
import Home from "./Pages/TodoForm.vue";
import NotFound from './Pages/NoteFound.vue';
import ListItem from "./Pages/TodoList.vue";
import ListI from "./Pages/CompleteTask.vue";


const Routes = {
  '/': Home,
  '/List':ListItem,
  '/CompleteTask':ListI
  
}

export default {
  components: {

  },


  data() {
    return {
      // data part 
     
   currentPath: window.location.hash,
     
    
    }


  },


  methods: {


 
  },


  computed: {


   currentView(){
return Routes[this.currentPath.slice(1)||'/'] || NotFound
    },
  },
  methods:{
     


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
    <a href="#/List">List</a>
    <a href="#/CompleteTask">CompleteTask</a>
  </nav>
  <div class="todolist">
 <h1>Our todo App</h1>
  
    <component :is = currentView />
    <footer>
    <h2>&copy; copyright by DSB</h2>
    </footer>
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

footer h2{
    font-size: 2rem;
  margin: 10rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 2rem;
  color: white;
  background-color: blue;
  /* color: white; */
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
