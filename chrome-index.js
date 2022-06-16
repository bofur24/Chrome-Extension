
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
}



deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    renderLeads();
} )



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "" ;
    localStorage.setItem("myLeads", JSON.stringify(myLeads)); //SETTING INPUT TO LOCALSTORAGE AS A STRING ON BUTTON CLICK


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



