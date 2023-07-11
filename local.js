// https://www.w3schools.com/jsref/prop_win_localstorage.asp

// SELECTORS
const list = document.querySelector('#list')
const input = document.querySelector('#specialInput')
const form = document.querySelector('#specialForm')



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
        
        console.log(localStorage.getItem("itemsArr"))

        if(localStorage.getItem("itemsArr") == null){
            const newArr = [input.value]
            input.value = ''
            localStorage.setItem("itemsArr", JSON.stringify(newArr));
        }else{
        const itemsArr = JSON.parse(localStorage.getItem("itemsArr"))
        console.log(itemsArr)
        itemsArr.push(input.value)

        localStorage.setItem("itemsArr", JSON.stringify(itemsArr));

        console.log(localStorage.getItem("itemsArr"))
        
        input.value = ''
        }

    }
    
}


// EVENT LISTNER
form.addEventListener('submit', handleSubmit)

if(localStorage.getItem("itemsArr") == null){
    console.log("no items stored")
}else{
    const localArr = JSON.parse(localStorage.getItem("itemsArr"))
    localArr.forEach(e=>loadItems(e))
}