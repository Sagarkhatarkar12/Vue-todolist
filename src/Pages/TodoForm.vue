<template>

<div class="Search">
    <input type="text" v-model="inputValue" >
    <!-- {{ alert(inputValue) }} -->
    <button id="SearchBtn"@click = "addTask(inputValue)" class="Search-btn"><i class="ri-add-fill"></i></button>
   
</div>
</template>
<script>
export default {
data(){
    return {
        task:[
    {id:1,text:"hii guys name jante hoge",isComplete:true},
    {id:2,text:"Hello bhai  me jante hoge", isComplete:false},
    {id:3,text:"hum nahi jaante toh ", isComplete:true}
  ],
        message:'Input message yhi banega ',
        inputValue :""
    }
},
props :{
    addTask:{
        type :Function,
        requried:true
    }
}
}
</script>
<style>

.Search{
    display: flex;
    height: 4rem;
    border: 1px solid black;
    overflow: hidden;
    border-radius: 1rem;
    /* width: rem; */
    
}
.Search-btn{

    border: none;
    cursor: pointer;
    font-family: sans-serif;
    height: 100%;
    width: 100%;
    font-weight: 2rem;
    font-size: 2rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: bold;
}
input {
    height: 100%;
    border: none;
    outline: none;
    font-size: 2rem;
    width: auto;
    padding: 1rem 1rem;
    /* border: none; */

}
input:focus{
    /* border: none; */
    outline: none;
}
</style>