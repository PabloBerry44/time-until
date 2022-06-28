const yearSelect = document.getElementById('year')
const monthSelect = document.getElementById('month')
const daySelect = document.getElementById('day')

//add years as options
for(q=new Date().getFullYear(); q>=1900; q--){
    let yearOption = document.createElement('option')
    yearOption.value = q
    yearOption.innerHTML = q
    yearSelect.appendChild(yearOption)
}

//add days as options
for(w=1; w<=31; w++){
    let dayOption = document.createElement('option')
    dayOption.value = w
    dayOption.innerHTML = w
    daySelect.appendChild(dayOption)
}