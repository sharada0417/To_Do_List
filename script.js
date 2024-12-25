window.onload = () => {
    const name = prompt("What is your first name?");
    const greetingElement = document.querySelector(".todo-app__greeting");
    const hour = new Date().getHours();

    let greeting ;
    if(hour < 6){
        greeting = "Good morning";
    } else if(hour <12){
        greeting = "Good Afternoon";
    } else if(hour<18){
        greeting = "Good Evening";
    } else if(hour<24){
        greeting = "Good Night";
    }
    greetingElement.textContent = greeting+", "+name+"👋";
}



const formatDate = (date) => {
    const currentDate = document.querySelector(".todo-app__date");
    const day = date.toLocaleString('en-US', { weekday: 'short' }); 
    const dateNum = date.getDate(); 
    const month = date.toLocaleString('en-US', { month: 'long' }); 
    const year = date.getFullYear(); 
  
    const suffix = (dateNum) => {
      if (dateNum === 1 || dateNum === 21 || dateNum === 31) return 'st';
      if (dateNum === 2 || dateNum === 22) return 'nd';
      if (dateNum === 3 || dateNum === 23) return 'rd';
      return 'th';
    };
  
    const formattedDate = ` Today, ${day} ${dateNum}${suffix(dateNum)} ${month} ${year}`;
    currentDate.textContent = formattedDate; 
    return formattedDate; 
  };
  formatDate(new Date());

const formatTime = () =>{
    const timeElement = document.querySelector(".todo-app__time");
    const hour = new Date().getHours();
    const minite = new Date().getMinutes();
    let newhour;
    let lap;
    if(hour>12){
        newhour = hour - 12;
    }else if(hour == 0){
        newhour = 12
    }else{
        newhour=hour
    }
    if(0<hour<12){
        lap = "A.M.";
    } else {
        lap = "P.M";
    }
    timeElement.textContent = newhour+" : "+minite+" "+lap;
}
formatTime();

const todoCreateButton = document.querySelector(".todo__create__button");
const todoInput = document.querySelector(".todo__input");
const todoContainer = document.querySelector(".todo__container");

const todoValues = [];
let todoElements = [];

todoCreateButton.addEventListener("click", () => {
    const value = todoInput.value;
    if (value === "") {
      return;
    }
    todoValues.push(value);
    console.log(todoValues);
    todoInput.value = "";
  
    renderTodos();
  });
  
  const renderTodos = () => {
    todoElements = todoValues.map((val, index) => {
      return `<div class="todo__item" data-index="${index}">
        <div class="todo__item__left">
          <input type="checkbox" id="completed" name="completed" />
          <span>${val}</span>
        </div>
        <div class="todo__item__right">
          <svg
            class="todo__delete__button"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="red"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          </svg>
        </div>
      </div>`;
    });
    todoContainer.innerHTML = todoElements.join(" ");
  };
  
  todoContainer.addEventListener("click", (e) => {
    if (e.target.closest(".todo__delete__button")) {
      const todoItem = e.target.closest(".todo__item");
      const index = todoItem.dataset.index;
      todoValues.splice(index, 1); 
      renderTodos(); 
    }
  });
  