export default class Model {
    constructor(){
        this.view = null;
        this.todos = JSON.parse(localStorage.getItem('todos'));

        //if todos is undefined or null
        if(!this.todos || this.todos.length < 1){
            this.todos = [
                {
                    id:0,
                    title: 'Learn JS',
                    description: 'Watch jS Tutorials',
                    completed: false,
                }
            ]
            this.currentId = 1;
        } else {
            this.currentId = this.todos[this.todos.length -1].id + 1;
        }
    }

    setView(view){
        this.view = view;
    }

    save(){
        //hay que transforma el array de objetos todo a un string json
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    getTodos(){
        return this.todos;
    }

    findTodo(id){
        return this.todos.findIndex((todo) => todo.id === id);
    }

    toggleCompleted(id){
        const index = this.findTodo(id);
        const todo = this.todos[index];
        todo.completed = !todo.completed;
        this.save();
    }

    editTodo(id, values){
        const index = this.findTodo(id);
        //this.todos[index] = {id, ...values}; //asigna al todo el id y expande values.
        Object.assign(this.todos[index], values); //hace lo mismo sin modificar el id.
        this.save();
    }

    addTodo(title, description){
        const todo = {
            id: this.currentId++,
            title,
            description,
            completed: false,
        }

        this.todos.push(todo);
        //console.log(this.todos);

        this.save();

        //return Object.assign({},todo ); //asigna una copia del objeto todo para que no pueda ser modificado de forma externa a la clase
        return {...todo}; //nos expande las propiedades de todo en un nuevo objeto. Sintaxis Spread
        //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    }

    removeTodo(id){
        const index = this.findTodo(id);
        this.todos.splice(index, 1); //borra 1 elemento de todos a partir de la posicion index
        this.save();
    }
}