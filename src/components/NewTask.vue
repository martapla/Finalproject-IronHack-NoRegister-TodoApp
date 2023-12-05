<template>
  <div class="container-newtask">
      <h1 class="title-newtask">Add a New Task!</h1>
      <div v-if="showErrorMessage">
          <p class="error-text">{{ errorMessage }}</p>
      </div>
      <div class="newtask-box">
          <!-- <div class="input-newtask"> -->
              <input type="text" placeholder="Add a Task Title" class="input-newtask" v-model="name">
         
              <input type="text" placeholder="Add a Task Description" class="input-newtask-description" v-model="description">
          <!-- </div> -->
          <button @click="addTask" class="button-add">Add</button>
      </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref('');
const description = ref('');

const emit = defineEmits(["getTasksHijo"]);

const showErrorMessage = ref(false);
const errorMessage = ref(null);

// Button Funtion
const addTask = () => {
if(name.value.length === 0 || description.value.length === 0){
    
    showErrorMessage.value = true;
    errorMessage.value = 'The task title or description is empty';
    setTimeout(() => {
    showErrorMessage.value = false;
    }, 3000);

} else {

    emit("getTasksHijo", name.value, description.value);
    name.value = "";
    description.value = "";
    } 
};

</script>

<style></style>
