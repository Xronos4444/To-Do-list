const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("add");
const listContainer = document.getElementById("list-container");

addBtn.onclick = function addTasks() {
    if (inputBox.value === '') {
        alert('You must something write')
    } else {
        listContainer.innerHTML += getNotes()
        saveData()
    }
    inputBox.value = ''
    
}

function getNotes() {
    return `
        <li>${inputBox.value}<span class="span">&times</span></li>        
    `;
}

listContainer.addEventListener("click", function toggleOrRemove(difference) {
    if (difference.target.tagName === 'LI') {
        difference.target.classList.toggle("checked")    
        saveData()
    } else if(difference.target.tagName === 'SPAN') {
        difference.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML)
}
function showTasks() {
    listContainer.innerHTML =localStorage.getItem('data')
}

showTasks()