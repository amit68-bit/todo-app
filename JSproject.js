let addBtn= document.querySelector(".add-btn");
let container= document.querySelector(".checkboxes");
let inp = document.querySelector(".input-field");

// addBtn.addEventListener("click", function(){
//     let item = document.createElement("li");
//     item.innerText= inp.value;
// })

addBtn.addEventListener("click", function () {
    if (inp.value.trim() === "") return; 


let box = document.createElement("div");
box.classList.add("box");

let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

let span = document.createElement("span");
    span.innerText=inp.value; 

let delBtn = document.createElement("button");
delBtn.innerHTML= '<i class="fa-solid fa-xmark"></i>';
delBtn.classList.add("delete-btn");

delBtn.addEventListener("click", function () {
        box.remove();
    });


    checkbox.addEventListener("change",function(){
        if(checkbox.checked){
            span.style.textDecoration="line-through";
            span.style.color="grey";
        }else{
            span.style.textDecoration="none";
            span.style.color="black";
        }
    })


    box.appendChild(checkbox);
    box.appendChild(span);
    box.appendChild(delBtn);

    container.appendChild(box);

    inp.value="";


})
let btn = document.querySelector(".button");
btn.addEventListener("click", async()=>{
    let fact= await getfacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText= fact;
})


let url = "https://random-quotes-freeapi.vercel.app/api/random";

async function getfacts(){
    try{
        let res= await axios.get(url);
        return `${res.data.quote} — ${res.data.author}`;
    }
    catch(err){
        console.log("Error:", err);
        return "No Quote Found";
    }
}