
const submit = document.getElementById("submit");
// submit.addEventListener("click", displayDetails);

submit.addEventListener("click", function (e){
    e.preventDefault();
    displayDetails();}, false);

let row = 1;

console.log("Dalis iki funkcijos");

function displayDetails()
{
    console.log("Funkcija");
    const subject = document.getElementById("subject").value;
    const priority = document.getElementById("priority").value;
    const date = document.getElementById("dueDate").value;
    const status = document.getElementById("status").value;
    const progress = document.getElementById("percent").value;
    // const btn = document.getElementById("submit").value;

    if(!subject|| !priority|| !date|| !status || !progress) {
        alert("Please fill all the boxes");
        return;
    }

    const display = document.getElementById("display");

    const newRow = display.insertRow(row);

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);


    cell1.innerHTML = subject;
    cell2.innerHTML = priority;
    cell3.innerHTML = date;
    cell4.innerHTML = status;
    cell5.innerHTML = progress;

    row++;

    const checkColumn = document.createElement("td");
    const check = document.createElement("input");
    check.setAttribute("type", "checkbox")
    newRow.appendChild(checkColumn);
    checkColumn.appendChild(check);

}

