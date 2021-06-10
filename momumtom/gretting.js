const form = document.querySelector('.js-form'),
    input = form.querySelector("input"),
    greeting = document.querySelector('.js-greetings')

const USER_LS = "currentUser"
const SHOWING_CN = "showing"

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSubmit);
}
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN); 
    greeting.innerText = `Hello ${text}`;
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    //유저가 없는 경우
    if(currentUser === null){
        askForName();
    //유저가 있는 경우
    }else{
    paintGreeting(currentUser);
    }
}
function init(){
    loadName();
}

init(); 