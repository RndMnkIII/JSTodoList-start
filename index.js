document.addEventListener('DOMContentLoaded', function (){
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const table = document.getElementById('table');
    const alert = document.getElementById('alert');
    const btn = document.getElementById('add');
    btn.onclick = addTodo;

    function addTodo(){
        if(title.value === '' || description.value === '') {
            alert.classList.remove('d-none');
            alert.innerText = 'Se requiere un titulo y descripción';
            return;
        }
        alert.classList.add('d-none');
     }
});
