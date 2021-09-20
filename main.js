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
            if(elm.stato == true){
                elm.stato == false;
            }else{
                elm.stato == true
            }
        },
        control: function(elm){
            if(elm.stato == true){
                return "done"
            }else{
                return"noDone"
            }
        }

    }
})