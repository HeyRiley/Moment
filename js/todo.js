const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');

    const TODOS_LS = 'toDos';

    let toDos = []; 

function deleteToDo(event) {
    console.log('I want to delete this li >>',event.target.parentNode);

    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });
    console.log('I want to update li array with this >>',cleanToDos);

    toDos = cleanToDos; 
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

const SHOW_LI = 'showing';
const SHOW_TR = 'transparent'

let idNum = 0;
function paintToDo(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.innerText='❌';
    delBtn.classList.add(SHOW_TR);
    delBtn.addEventListener('click',deleteToDo);
    const span = document.createElement('span');
    const newId = idNum+=1 ;

    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.classList.add(SHOW_LI);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value='';
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos); 
        console.log(parsedToDos)

        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        }); 
    }

}

function init() {
    loadToDos();
    toDoForm.addEventListener('submit',handleSubmit);
}
init();

