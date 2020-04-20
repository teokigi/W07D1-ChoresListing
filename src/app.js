import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
        chores: [
            {name: "Vacuuming", priority: "high"}
        ]
    },
    methods: {
        saveNewItem:function(){
            const newChore = {name:this.name, priority:this.toDoPriority}
        }
    }
  
  });
});
