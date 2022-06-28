const yearBtn = document.querySelector('.year')
const monthBtn = document.querySelector('.month')
const dayBtn = document.querySelector('.day')
const optionsContainer = document.querySelector('.optionsContainer')
const errorMsg = document.querySelector('.errorMsg')

const years = []
for(w=new Date().getFullYear(); w>=1900; w--){
    years.push(w)
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const days = []
for(q=1; q<=31; q++){
    days.push(q)
}

let selectedYear, selectedMonth, selectedDay

yearBtn.addEventListener('click', displayYears)
monthBtn.addEventListener('click', displayMonths)
dayBtn.addEventListener('click', displayDays)

function clearContainer(){
    while(optionsContainer.firstChild){
        optionsContainer.removeChild(optionsContainer.lastChild)
    }
}

function displayYears(){
    clearContainer()
    for (const year of years) {
        const yearNode = document.createElement('div')
        yearNode.innerHTML = year
        yearNode.addEventListener('click', ()=>{
            yearBtn.innerHTML = year
            selectedYear = year
            clearContainer()
        })
        optionsContainer.appendChild(yearNode)
    }
}
function displayMonths(){
    clearContainer()
    for (const month of months) {
        const monthNode = document.createElement('div')
        monthNode.innerHTML = month
        monthNode.addEventListener('click', ()=>{
            monthBtn.innerHTML = month
            selectedMonth = months.indexOf(month)+1
            clearContainer()
        })
        optionsContainer.appendChild(monthNode)
    }
}
function displayDays(){
    clearContainer()
    for (const day of days) {
        const dayNode = document.createElement('div')
        dayNode.innerHTML = day
        dayNode.addEventListener('click', ()=>{
            dayBtn.innerHTML = day
            selectedDay = day
            clearContainer()
        })
        optionsContainer.appendChild(dayNode)
    }
}

function calculate(){
    const selectedDate = selectedYear+'-'+selectedMonth+'-'+selectedDay
    
    const date = new Date(selectedDate)
    
        if(typeof date.getTime === 'function' && !isNaN(date)){
            errorMsg.style.display = 'none'
        }
        else{
            errorMsg.style.display = 'block'
        }

}