import { defineStore } from 'pinia'
export const  PositionChange = defineStore('tasks',{
    state:()=>{
        return { task: [
                { id: 1, text: "hii guys name jante hoge", isComplete: true },
                { id: 2, text: "Hello bhai  me jante hoge", isComplete: false },
                { id: 3, text: "hum nahi jaante toh ", isComplete: true }
            ]}

         
    },
    actions:{
        addTask(inputValue) {

      this.task.push({ id: (this.task.length + 1), text: inputValue, isComplete: false })
      inputValue = ""
    },
          deleteItem(id) {
            this.task =this.task.filter(item => item.id !== id)
        },
         changeCheckBox(id) {
           

      const Index = this.task.findIndex(t => t.id === id);
   
   
      if (Index === -1) {
        return
      }
     this.task[Index].isComplete = !this.task[Index].isComplete;
  

    },

    }
})