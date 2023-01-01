let count = 0
let totalCount = 0
let total = document.getElementById('total')
let number = document.getElementById('number')
let result = document.getElementById('result')
let resultArea = result.textContent
let displayedResult = ''

function doIncrement() {
    count += 1
    number.textContent = count
}


function doSave() {
    displayedResult += resultArea + ` - ${count}`
    resultArea = ''
    result.textContent = displayedResult
    totalCount += count
    count = 0
    number.textContent = count
    total.textContent = `Total: ${totalCount}`
}