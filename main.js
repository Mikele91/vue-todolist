const app = new Vue ({
    el: "#root",
    data:{
        todos:[

            {
                tipo:"Fare i compiti", 
                stato : false,
            },

            {
                tipo:"Fare il check in", 
                stato : true,
            },
            {
                tipo:"Prendere aereo", 
                stato : false,
            },


        ],
        newTodo:{tipo:"",
                stato:false
                },
    },
    methods:{
        push: function(){
            if(this.newTodo.tipo!= ""){
                this.todos.tipo.push(this.newTodo.tipo);
                this.newTodo="";

            }
        },
        removeTodo: function(todo_index){
            this.todos.splice(todo_index, 1);
        },
        // control: function(elm){
        //     console.log(elm);
        // }

    }
})