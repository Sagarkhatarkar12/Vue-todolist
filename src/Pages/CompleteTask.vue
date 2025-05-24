
<script>
import List from '../components/List.vue';
import{ store }from "../store/store.js"
export default{
   components:{
     List
   },
  data(){
    return {
    task :store.task

    }
  },
  computed:{
                   CompleteData() {
      return store.task.filter(t => t.isComplete == true)
    },
    
  },
  methods:{
        deleteItem(id) {
            console.log("delete working..")
            console.log(id)
            // console.log(store.task.filter(item=>item.id != id))
            store.task = store.task.filter(item => item.id !== id)
        },
     changeCheckBox(id) {
            console.log("checkBox")
            console.log(id)
console.log(store.task)
      const Index = store.task.findIndex(t => t.id === id);
      console.log(Index)
   
      if (Index === -1) {
        return
      }
     store.task[Index].isComplete = !store.task[Index].isComplete;
    

    },
  }
}

</script>
<template>
 
<List :task = CompleteData 
:checkBox = changeCheckBox
:deleteItem=deleteItem  />
</template>
<style>
</style>
