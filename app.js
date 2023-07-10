console.log(document.getElementById("pTag"))
const pTag = document.querySelector('#pTag')

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

console.log(document.getElementById("pTag"))