const app = new Vue ({
    el: "#root",
    data:{
        todos:[
            "Fare i compiti", "Fare il check in", "Prednere l'aereo"
        ],
        newTodo:"",
    },
    methods:{
        push: function(){
            if(this.newTodo!= ""){
                this.todos.push(this.newTodo);
                this.newTodo="";

            }
        },
        removeTodo: function(todo_index){
            this.todos.splice(todo_index, 1);
        }

    }
})