// const body=document.querySelector("body");
// const ul=document.createElement("ul");
// const li=document.createElement("li");


// li.textContent="Hello";

// li.style.background="green";
// li.style.padding="25px";
// li.style.border= "4px solid red";



// ul.appendChild(li);
// body.append(ul);



            //   TAPSIRIQ-DARK MODE 

const body=document.querySelector(".list");
const addBtn=document.querySelector('.btn');
let user=true;

function add(){
    
    if(user){
        body.classList.add('dark')
        user = false
    } else{
        body.classList.remove('dark')
        user = true
    }
    
}
addBtn.addEventListener("click", add);



