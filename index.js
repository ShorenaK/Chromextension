const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ulEl')
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

// let myLeads = []
inputBtn.addEventListener('click', function(){
    // push th value from the inputEl into the myleads array
    // inputEl.value += myLead
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for(let i= 0; i < myLeads.length; i++){
  console.log(myLeads[i])
}