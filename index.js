let myLeads = []
const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')

inputBtn.addEventListener('click', function(){
    // push th value from the inputEl into the myleads array
    myLeads.push(inputEl.value)
    inputEl.value = ''
    renderLeads()
})
// ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"


function renderLeads(){
    let listItems = ''
    for(let i= 0; i < myLeads.length; i++){
        listItems += "<li>" + myLeads[i] + "</li>"
    }   
ulEl.innerHTML = listItems
}