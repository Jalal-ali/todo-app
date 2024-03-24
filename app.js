const ol = document.querySelector("ol");
const todoInput = document.querySelector("#input"); 


function renderTodo() {
   ol.innerHTML = ' ';
   for(let i=0; i < arr.length ; i++){
      ol.innerHTML += `<br /><li class="li"> ${arr[i]}
     <span onclick="deleteTodo(${i})" class="dlt-btnn" ><i class="fa-solid fa-trash"></i></span> <span onclick="deleteTodo(${i})" class="edit-btnn"><i class="fa-solid fa-pen-to-square"></i></span></li>`

   }
}

const arr = [];

function add(){
   arr.push(todoInput.value);
   renderTodo();
   todoInput.value = '';
}

function deleteTodo(index){
   arr.splice (index , 1);
   renderTodo();
}
function editTodo(index){
   const newval = prompt (`Edit your value :`);
   arr.splice (index , 1 , newval);

   renderTodo();
   
}