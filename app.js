
document.querySelector('.addbtn').addEventListener('click',()=>{
    let todo = document.querySelector('.add').value.trim();
    if (todo!=='') {

    if(document.querySelector('.input1 .todo-item1')==null) {
        const myDiv = document.querySelector(`.input1`);
        const newTodo = document.createElement('p');
        newTodo.textContent = todo;
        newTodo.classList.add('todo-item1', 'todo-item');
        myDiv.insertBefore(newTodo,myDiv.firstChild)
        localStorage.setItem('firstodo',document.querySelector(".input1 .todo-item1").innerText);
        document.querySelector('.add').value = '';
    }
    else if (!document.querySelector('.input2 .todo-item2')) {
        const myDiv2 = document.querySelector(`.input2`);
        const newTodo2 = document.createElement('p');
        newTodo2.textContent = todo;
        newTodo2.classList.add('todo-item2', 'todo-item');
        myDiv2.insertBefore(newTodo2,myDiv2.firstChild)
        localStorage.setItem('secondtodo',document.querySelector(".input2 .todo-item2").innerText);
    document.querySelector('.add').value = '';
    }
    else if (!document.querySelector('.input3 .todo-item3')) {
        const myDiv3 = document.querySelector(`.input3`);
        const newTodo3 = document.createElement('p');
        newTodo3.textContent = todo;
        newTodo3.classList.add('todo-item3', 'todo-item');
        myDiv3.insertBefore(newTodo3,myDiv3.firstChild)
        localStorage.setItem('thirdtodo',document.querySelector(".input3 .todo-item3").innerText);
    document.querySelector('.add').value = '';
    }
}});

document.querySelector('.container').addEventListener('click',(e)=>{
    if (e.target.classList.contains('btn1')) {
        let delete1 = document.querySelector(".input1 .todo-item1");
        if (delete1) {
            delete1.remove();
            localStorage.removeItem('firsttodo');
        }}})

document.querySelector('.input2').addEventListener('click',(e)=>{
    if (e.target.classList.contains('btn2')) {
            document.querySelector(".input2 .todo-item2").remove();
            localStorage.removeItem('secondtodo');
    }})

document.querySelector('.input3').addEventListener('click',(e)=>{
    if (e.target.classList.contains('btn3')) {
        document.querySelector(".input3 .todo-item3").remove();
            localStorage.removeItem('thirdtodo');
    }})



