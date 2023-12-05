<template>
   <div class="wrapper">
    
      <NewTask @getTasksHijo="getTasks" />

      <h1 class="title-tasks">Tasks:</h1>
      
      <div class="tasks-boxes">
         
         <TaskItem v-for="task in taskList" 
         :key="task.id" 
         :task="task"
            @getTasksHijo="getTasks"
            @deleteTask="deleteTask" 
            @edit-task="editTaskToggle"
            @change-task="changeTask"
            />
      </div>

   </div>
</template>

               <!----------- SCRIPT ------------->
<script setup>
import NewTask from '../components/NewTask.vue';
import TaskItem from '../components/TaskItem.vue';
import { ref } from 'vue';
import { uid } from 'uid';

const taskList = ref ([]);

const getTasks = (name,description) => {
   taskList.value.push({
      id: uid(),
      name,
      description,
      is_complete: false,
      isEditing: false,
      
   });
 
};

// ----- DELETE Task-----  //
const deleteTask = (del) => {
    taskList.value = taskList.value.filter((task) => task.id !== del)
}


// ------- EDIT Task --------- //
const editTaskToggle = (id) => {
   const item = taskList.value.find((item) => item.id === id);
   if (item) {
      item.isEditing = !item.isEditing;
   }
};


// ------- CHANGE Task --------- //
const changeTask = (id,newName,newDescription) => {
    const item = taskList.value.find((item) => item.id === id);
    if (item) {
      item.name = newName;
      item.description = newDescription;
      item.isEditing = false; // Close the edit form
    }
};

</script>



