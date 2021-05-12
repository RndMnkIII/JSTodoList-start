export default class View {
    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        this.btn = document.getElementById('add');
        this.btn.onclick = () => this.addTodo('Titulo', 'Desc');
    }

    setModel(model){
        this.model = model;
    }

    addTodo(title, description){
        this.model.addTodo(title, description);
    }
}