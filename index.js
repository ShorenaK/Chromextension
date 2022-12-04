const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

let listItems = ''
inputBtn.addEventListener('click', function(){
    // push th value from the inputEl into the myleads array
    // inputEl.value += myLead
    myLeads.push(inputEl.value)
    console.log(myLeads)
})
// ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

for(let i= 0; i < myLeads.length; i++){
    //   ulEl.textContent += myLeads[i] + ' '
    // let li = document.createElement('li')
    // li.textContent = myLeads[i]
    // ulEl.append(li)

    listItems += "<li>" + myLeads[i] + "</li>"
}
ulEl.innerHTML = listItems