import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
        chores: [
            {name: "Vacuuming", priority: "high"},
            {name: "taking out the trash", priority:"low" }
        ],
        newToDo: "",
        newPriority: ""
    },
    methods: {
        saveNewItem:function(){
            const newChore = {name:this.newToDo, priority:this.newPriority}
            this.chores.push(newChore)
            this.newToDo="";
            this.newPriority=null;
        }
        
    }
  
  });
});
// done - Render a list of todos from an array of strings.
// done - Add the capability to add a new todo to the list.
// done - Update the todos array to take in objects with keys of name and priority.
// done - Add radio buttons to track the level of priority
// todo - Give the user visual feedback on what todos are high priority