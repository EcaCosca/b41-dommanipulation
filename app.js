// SELECTORS 
const pTag = document.querySelector('#pTag')
const parent = document.querySelector('#parent')

// ADD EVENT LISTENER 
// https://www.w3schools.com/jsref/met_element_addeventlistener.asp
// LIST OF DIFFERENT EVENTS
// https://www.w3schools.com/jsref/dom_obj_event.asp
// document.getElementById("pTag").addEventListener('click', ()=>alert("Hey don't touch that"))
// document.querySelector("#pTag").innerHTML = "We have changed the p tag"


const handleClick = () => {
    pTag.innerHTML = "Hey you clicked the P tag";
    // pTag.style.backgroundColor = "red"
    console.log(pTag.style.backgroundColor);

    // if(pTag.style.backgroundColor == "red"){
    //     pTag.style.backgroundColor = ""
    // }else{
    //     pTag.style.backgroundColor = "red"
    // }
    pTag.style.backgroundColor == "red" ? pTag.style.backgroundColor = "" : pTag.style.backgroundColor = "red"
}

pTag.addEventListener('click', handleClick)

// console.log(document.getElementsByTagName('p'))
// console.log(document.getElementsByClassName('others'))
// console.log(document.querySelectorAll('p.others'));

// console.log(document.querySelector('#parent').lastElementChild)
// document.removeChild(pTag)

const appendNewPTag = () => {
    console.log(parent);

    const para = document.createElement("p");
    para.innerText = "This is a new paragraph";
    parent.appendChild(para);
}

document.querySelector("#main").addEventListener('click', appendNewPTag)

// console.log(document.getElementById("pTag"))

// EXERCISES

// JS DOM – OnClick

// redirectButton
const redirectButton = document.querySelector('#redirectButton');

// handleclick
const handleClick1 = () => {
  document.location = 'https://getbootstrap.com'
}
// event listener
redirectButton.addEventListener("click", handleClick1);


