<template>
    <div class="container-tasklist">
        <h3 v-bind:class="task.is_complete ? 'completed' : 'not-completed'">{{ task.name }}</h3>
        <p v-bind:class="task.is_complete ? 'completed' : 'not-completed'">{{ task.description }}</p>
    
        <!---- Buttons ---->
        <div class="tasks-btn">
           
            <button @click="deleteTask" class="delete-btn">Delete</button>

            <button 
            @click="$emit('edit-task',props.task.id)" class="edit-btn">Edit</button>

            <button 
            @click="$emit('complete-task',props.task.id)" class="status-btn">Done!</button>
        </div>
    
        <!---- Edit Tasks ---->
        <div v-show="task.isEditing" class="task-edit">

            <input type="text" class="input-task" placeholder="New Title" v-model="name"/>

            <input type="text" class="input-task" placeholder="New Description" v-model="description" />
    

            <button @click="$emit('change-task', props.task.id, name, description)" class="save-btn">Save</button>

        </div>
    </div>
    </template>

                   <!----------- SCRIPT ------------->
    <script setup>
    import { defineProps } from 'vue';
    import { ref } from 'vue';
    
    const emit = defineEmits(["getTasksHijo", "complete-task","delete-task","edit-task","change-task"]);
   
    
    const props = defineProps({
        task: Object,
    });

    const name = ref(props.task.name);
    const description = ref(props.task.description);

    //------- DELETE TASK ------//
    const deleteTask = () => {
       emit("delete-task", props.task.id);
    };

    
    </script>
    
    <style></style>
    
