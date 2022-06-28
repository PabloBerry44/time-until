const yearBtn = document.querySelector('.year')
const monthBtn = document.querySelector('.month')
const dayBtn = document.querySelector('.day')
const optionsContainer = document.querySelector('.optionsContainer')
const errorMsg = document.querySelector('.errorMsg')
const resultContainer = document.querySelector('.resultContainer')
const counterP = document.querySelector('.counter')

const dayCount = document.querySelector('.dayCount')
const hourCount = document.querySelector('.hourCount')
const minuteCount = document.querySelector('.minuteCount')
const secondCount = document.querySelector('.secondCount')
const dayWord = document.querySelector('.dayWord')
const hourWord = document.querySelector('.hourWord')
const minuteWord = document.querySelector('.minuteWord')
const secondWord = document.querySelector('.secondWord')

const current = new Date()

const currentYear = current.getFullYear()
const currentMonth = current.getMonth()+1
const currentDay = current.getDate()

const years = []
for(w=2100; w>=1900; w--){
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

resultContainer.addEventListener('click', clearContainer)

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

        if(year==currentYear){
            yearNode.id = 'current'
        }
    }
    document.getElementById("current").scrollIntoView();
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

let counter
function calculate(){

    const selectedDate = (selectedMonth+'/'+selectedDay+'/'+selectedYear).toString()
    const sDate = new Date(selectedDate)


    if(typeof sDate.getTime === 'function' && !isNaN(sDate) && sDate.getDate()==selectedDay){

        if(!(typeof counter === 'undefined')){
            clearInterval(counter)
        }

        counter = setInterval(updateCountdown, 1000)

        errorMsg.style.display = 'none'
    }
    else{
        errorMsg.style.display = 'block'
    }

    function updateCountdown(){

        const cDate = new Date()
        const diff = sDate.getTime() - cDate.getTime()
        let secondsUntil = Math.ceil(diff / 1000)

        let days
        let hours
        let minutes
        let seconds
    

        days = secondsUntil/(60*60*24)
        hours = secondsUntil/(60*60) - Math.floor(days)*24
        minutes = secondsUntil/(60) - ((Math.floor(days)*24*60) + Math.floor(hours)*60)
        seconds = secondsUntil - ((Math.floor(days)*24*60*60) + Math.floor(hours)*60*60 + Math.floor(minutes)*60) 

        days = Math.floor(days)
        hours = Math.floor(hours)
        minutes = Math.floor(minutes)
        seconds = Math.floor(seconds)

        if(sDate < cDate){
            days = -days-1
            hours = 24-hours-1
            minutes = 60-minutes-1
            seconds = 60-seconds
        }

        dayCount.innerHTML = days
        hourCount.innerHTML = hours
        minuteCount.innerHTML = minutes
        secondCount.innerHTML = seconds

        days==1 ? dayWord.innerHTML='&nbspday' : dayWord.innerHTML = '&nbspdays'
        hours==1 ? hourWord.innerHTML='&nbsphour' : hourWord.innerHTML = '&nbsphours'
        minutes==1 ? minuteWord.innerHTML='&nbspminute' : minuteWord.innerHTML = '&nbspminutes'
        seconds==1 ? secondWord.innerHTML='&nbspsecond' : secondWord.innerHTML = '&nbspseconds'

    }
}