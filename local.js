// https://www.w3schools.com/jsref/prop_win_localstorage.asp

// SELECTORS
const list = document.querySelector('#list')
const input = document.querySelector('#specialInput')
const form = document.querySelector('#specialForm')

// HANDLER FUNCTIONS
const handleSubmit = (e) => {
    e.preventDefault()

    if(input.value == ''){
        alert('Input is empty')
    }else{
        const li = document.createElement("li")
        li.innerText = input.value
        list.appendChild(li)
        input.value = ''
    }

}

// EVENT LISTNER
form.addEventListener('submit', handleSubmit)