const toDoForm = document.getElementById("todo-form");

// const toDoInput = document.querySelector("#todo-form input");
// 위에서 todo-form 찾아뒀으니 이를 사용해도 가능함 ↓
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos";

let toDos = [];

// 스토리지에 작성한 투두 저장하는 함수!
function saveToDos(){
    // localstorage는 텍스트만 저장이 된다. 배열을 만들어서 보내도 텍스트만 빼서 저장됨.
    // localStorage.setItem(TODOS_KEY,toDos);   --> 쉼표로 나열된 단순 텍스트(string)가 되버림
    // 그럼 배열모양의 텍스트로 만들어서 주자. (눈속임)
    // string(텍스트) 형태로 바꾸는 방법. JSON.stringify() 
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
    
}

function deleteToDo(event){
    // 여러개 버튼중에서 어떤 버튼 눌렀는지
    const deleteList = event.target.parentElement;
    deleteList.remove();

    // toDos.배열에서 살제할것 없앤걸로 만들어진 배열을 다시 toDos로 재선언
    // toDo.id는 number타입인데 deleteList.id는 string임. 타입 통일필요
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteList.id));
    saveToDos();
};

function paintTodo(newToDo){
    const list = document.createElement("li");
    list.id = newToDo.id;
    const span = document.createElement("span");
    // 받은거에서 text값을 표시
    span.innerText = newToDo.text;
    
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteToDo);


    list.appendChild(span);
    list.appendChild(button);
    
    toDoList.appendChild(list);
};

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    // localStorage.setItem("toDoliist", newToDo);  --> 될줄 알았지만 덮어씌우는 방법으로 1개만 저장됨
        // 그래서 배열에 일단 저장하고 그 배열을 스토리지에 저장하는 함수 필요 
    
    const newTodoObj = {
        id: Date.now(),
        text: newToDo,
    }
    toDos.push(newTodoObj);
    saveToDos(newToDo);
    toDoInput.value = "";   // 이 상황에서의 value값만 없앤것. 
        // 없앤 값을 newToDo변수에 넣지는 않았으므로 newToDo에는 이전 값이 그대로 들어있음.
    paintTodo(newTodoObj);
};

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// savedTodDos 가 스토리지에 있으면  if(savedToDos !== null) 과도 같은 의미
if(savedToDos) {
    // 배열모양을 한 string을 진짜 배열로 바꿔줌. JSON.stringify()의 반대 버전.
    const parsedToDos = JSON.parse(savedToDos);

    // 스토리지에 todos가 있는 한 변수 toDos는 앞으로 계속 여기서 바뀐상태 유지
    toDos = parsedToDos;
    //화살표 함수. 기존처럼 함수를 따로 설정해도 같은 효과.
    parsedToDos.forEach(paintTodo);
    // 이제야 새로고침해도 리스트 유지됨.
}
