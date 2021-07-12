
const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector("#login-form button");
const loginForm =document.querySelector("#login-form");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/*
const link = document.querySelector("a");
function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
    alert("clicked");
}
*/

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;

    loginForm.classList.add(HIDDEN_CLASSNAME);
    //greeting.innerText = "Hello "+ username;

    localStorage.setItem(USERNAME_KEY,username);

    //greeting.innerText =`Hello ${username}`;
    //greeting.innerTextclassList.remove(HIDDEN_CLASSNAME);
    paintUsername();

    /*
    if(username ===""){
        alert("empty input");
    }
    else if(username.length>15 || username.length<6){
        alert("invalid length");
    }
*/
    
    console.log(loginInput.value);
}

function paintUsername(){
    //show logic
    const username = localStorage.getItem("username");
    greeting.innerText =`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);    
}

//loginButton.addEventListener("click",handleLoginClick);
//loginForm.addEventListener("submit",onLoginSubmit) 
//link.addEventListener("click",handleLinkClick);

const savedUserName = localStorage.getItem(USERNAME_KEY);

console.log(savedUserName);

if(savedUserName === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit) 
}
else{
    paintUsername();
}