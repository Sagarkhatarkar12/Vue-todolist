<template>
    <li class="item">

        <input type="checkbox" name="" id="">
        <p class="item-para">{{ message }} </p>
        <div class="icon"><i class="ri-close-large-line"></i></div>
    </li>
    <li class="item">

        <input type="checkbox" name="" id="">
        <p class="item-para">{{ message }} </p>
        <div class="icon"><i class="ri-close-large-line"></i></div>
    </li>
</template>
<script>
export default {

    data() {
        return {
            message: "Our Item "
        }
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