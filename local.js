// https://www.w3schools.com/jsref/prop_win_localstorage.asp
// https://www.geeksforgeeks.org/how-to-store-an-array-in-localstorage/

// SELECTORS
const list = document.querySelector('#list')
const input = document.querySelector('#specialInput')
const form = document.querySelector('#specialForm')
const megaDestroy = document.querySelector('#megaDestroy')


// HANDLER FUNCTIONS
const loadItems = (str) => {
    const li = document.createElement("li")
    li.innerText = str
    list.appendChild(li)
}

const handleSubmit = (e) => {
    e.preventDefault()
    
    if(input.value == ''){
        alert('Input is empty')
    }else{
        loadItems(input.value)
        if(localStorage.getItem("itemsArr") == null){
            const newArr = [input.value]
            input.value = ''
            localStorage.setItem("itemsArr", JSON.stringify(newArr));
        }else{
            const itemsArr = JSON.parse(localStorage.getItem("itemsArr"))
            itemsArr.push(input.value)
            localStorage.setItem("itemsArr", JSON.stringify(itemsArr));
            input.value = ''
        }
    }
}


// EVENT LISTNER
form.addEventListener('submit', handleSubmit)
megaDestroy.addEventListener('click', ()=>{
    localStorage.clear()
    list.innerHTML = ''
})

if(localStorage.getItem("itemsArr") == null){
    console.log("no items stored")
}else{
    const localArr = JSON.parse(localStorage.getItem("itemsArr"))
    localArr.forEach(e=>loadItems(e))
}