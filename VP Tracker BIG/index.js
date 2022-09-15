let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let iCount = 0
let count = 0

function increment() {
    iCount += 1
    count += 1
    countEl.textContent = count
    totalEl.innerText = iCount
}

function save() {
    let countStr = " " + count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function reset() {
    count = 0
    iCount = 0
    totalEl.textContent = count
    saveEl.textContent = "-"
    countEl.textContent = 0
    
}
