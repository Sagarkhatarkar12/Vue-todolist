<template>
  

    <li class="item" >

        <input type="checkbox" :checked="isComp" @change="changeCheckBox(id)" name="" id="">
        <p class="item-para">{{ text }} </p>

        <div class="icon" @click="deleteItem(id)"  ><i class="ri-close-large-line"></i></div>
    </li>
</template>
<script>
export default {

    data() {
        return {
        task:[
    {id:1,text:"hii guys name jante hoge",isComplete:true},
    {id:2,text:"Hello bhai  me jante hoge", isComplete:false},
    {id:3,text:"hum nahi jaante toh ", isComplete:true}
  ]
        }
    },
    props:{
    id:{
        type:Number,
        required:true,
   
      },
      isComp :{
        type:Boolean,
        required:true
      },
      text:{
        type:String,
        required :true
      },
      deleteItem:{
type:Function,
required :true,
      },

changeCheckBox: {
  type: Function,
  required: true
}
        // item:{
        //     type:,
        //     required:true,
        //     default :()=>({ text: '', isComp: false })
        // }
    }
}

</script>
<style scoped>
input {
    /* font-size: 3rem; */
    position: absolute;
    left: 1rem;
      font-size: 110%;
  display: inline;
}

li {
    font-size: 3rem;
    font-family: sans-serif;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1rem;
    width: 35rem;
    background-color: #d78c28;
    border-radius: 1rem;
    color:white;
    position: relative;
}

p {
font-weight: bold;
    text-align: center;
}

.icon {
    right: 0;
    color: white;
    background-color: green;
    padding: 1rem;
    border-radius: 0.5rem;
    font-weight: bold;
    position: absolute;
    cursor: pointer;
}
</style>