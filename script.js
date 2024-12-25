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