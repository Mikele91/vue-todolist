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
        newTodo:"",
    },
    methods:{
        push: function(){
            if(this.newTodo!= ""){
                this.todos.push({
                    tipo:this.newTodo,
                    stato:false
                },
                    );
                this.newTodo="";

            }
        },
        removeTodo: function(todo_index){
            this.todos.splice(todo_index, 1);
        },
        changeTodo: function(elm){
           console.log(elm);
            
        },
        control: function(elm){
            if(elm){
                return "done"
            }else{
                return"noDone"
            }
        }

    }
})