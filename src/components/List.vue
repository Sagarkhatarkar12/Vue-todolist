
<script>
import ListItem from "./Listitem.vue"

export default {
      components:{
   ListItem,
  },
    data(){
    return {
        message :"List render here "
      
    }
    },
    methods :{

    }
}

</script>

<template>
<!-- <h1>{{ message }}</h1> -->
<ul>

    <ListItem/>
  

</ul>
</template>

<style>
ul{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>