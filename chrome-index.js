
let myLeads = `["www.awesomelead.com]`;

myLeads = JSON.parse(myLeads);
myLeads.push("www.lead2.com")
myLeads = JSON.stringify(myLeads)
console.log(typeof myLeads)




const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

localStorage.setItem("MyLeads", "www.runescape.com");
console.log(localStorage.getItem("MyLeads"));
localStorage.clear();


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "" ;
    renderLeads();
    
})



function renderLeads() {
    let listItems = "";
    for ( i = 0; i < myLeads.length; i++) {

        //listItems += "<li><a href='" + myLeads[i] +"' target='_blank'>" + myLeads[i] + "<a></li>";
        //Template strings
        listItems += `
        <li>
            <a target="_blank" href="${myLeads[i]}" > 
            ${myLeads[i]}  
            <a>
        </li>`;
        
        
        
        // create element
        //const li = document.createElement("li")
        // set text content
        //li.textContent = myLeads[i]
        // append to ul
        //ulEl.append(li)
    }
    ulEl.innerHTML = listItems;
}



