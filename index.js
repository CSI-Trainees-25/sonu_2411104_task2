// let btn=document.querySelector("button");
// let inp=document.querySelector("input");
// let ul=document.querySelector("ul");

// btn.addEventListener("click", function(){
//     console.log(inp.value);

//     let item=document.createElement("li");
// item.innerText=inp.value;
// ul.appendChild(item);


//     inp.value="";


// });





// let btn = document.querySelector("button");
// let inp = document.querySelector("input");

// // create a ul (or select if you already have it in HTML)
// let ul = document.createElement("ul");
// document.body.appendChild(ul);






// btn.addEventListener("click", function() {
//     console.log(inp.value);

// let delbtn=document.createElement("delete");
// delbtn.innerText="delete";
// delbtn.classList.add("delete");

//     let item = document.createElement("li");
//     item.innerText = inp.value;
//     ul.appendChild(item);

//     inp.value = "";
// });

let btn = document.querySelector("button");
let inp = document.querySelector("input");

// create a ul (or select if you already have it in HTML)
let ul = document.createElement("ul");
document.body.appendChild(ul);

btn.addEventListener("click", function () {
    console.log(inp.value);

    // create list item
    let item = document.createElement("li");
    item.innerText = inp.value;

    // create delete button
    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");

    // when delete is clicked, remove the li
    delbtn.addEventListener("click", function () {
        item.remove();
    });

    // add delete button inside li
    item.appendChild(delbtn);

    // add li to ul
    ul.appendChild(item);

    // clear input
    inp.value = "";
});

