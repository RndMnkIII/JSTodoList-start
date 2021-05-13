export default class Filters{
    constructor(){
        this.form = document.getElementById('filters');
        this.btn = document.getElementById('search');
    }

    onClick(callback){
        this.btn.onclick = (e) => {
            e.preventDefault(); //Anula comportamiento por defecto del formulario Filters, no lo envia al servidor ni recarga la página
            const data = new FormData(this.form);

            callback({
                type: data.get('type'),
                words: data.get('words'),
            });
        }
    }
}