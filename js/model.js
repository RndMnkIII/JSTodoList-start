export default class Model {
    constructor(){
        this.view = null;
        this.todos = [];
        this.currentId = 1;
    }

    setView(view){
        this.view = view;
    }

    getTodos(){
        return this.todos;
    }

    addTodo(title, description){
        const todo = {
            id: this.currentId++,
            title,
            description,
            completed: false,
        }

        this.todos.push(todo);
        //console.log(todo);
        //return Object.assign({},todo ); //asigna una copia del objeto todo para que no pueda ser modificado de forma externa a la clase
        return {...todo}; //nos expande las propiedades de todo en un nuevo objeto. Sintaxis Spread
        //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    }

    removeTodo(id){
        const index = this.todos.findIndex((todo) => todo.id === id);
        this.todos.splice(index, 1); //borra 1 elemento de todos a partir de la posicion index
    }
}