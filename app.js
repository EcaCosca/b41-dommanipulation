console.log(document.getElementById("pTag"))

// document.getElementById("pTag").addEventListener('click', ()=>alert("Hey don't touch that"))
// document.querySelector("#pTag").innerHTML = "We have changed the p tag"

const handleClick = () => {
    console.log("Hey you clicked the P tag");
    document.querySelector('#pTag').style.backgroundColor = "red"
}

document.querySelector("#pTag").addEventListener('click', handleClick)

console.log(document.getElementById("pTag"))