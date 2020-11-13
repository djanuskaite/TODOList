const submit = document.getElementById("submit");
// submit.addEventListener("click", displayDetails);
submit.addEventListener("click", function (e){
    e.preventDefault();
    displayDetails();}, false);

let row = 1;
console.log("Dalis iki funkcijos");

//const tableBody = document.querySelector("#tableBody");


function displayDetails() {
    console.log("Funkcija");


    const subject = document.getElementById("subject").value;
    const priority = document.getElementById("priority").value;
    const date = document.getElementById("dueDate").value;
    const status = document.getElementById("status").value;
    const proc = document.getElementById("proc").value;
 
    // const btn = document.getElementById("submit").value;
    if (!subject || !priority || !date || !status || !proc) {
        alert("Please fill all the boxes");
        return;
    }

    //insertina nauja eilute, todel jokiu td & tr nebekuriam
    const display = document.getElementById("display");
    const newRow = display.insertRow(row);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);

    const check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    cell1.appendChild(check)
    cell2.innerHTML = subject;
    cell3.innerHTML = priority;
    cell4.innerHTML = date;
    cell5.innerHTML = status;
    cell6.innerHTML = proc;
    const btnDelete = document.createElement("td");
    //check.setAttribute("type", "remove");
    btnDelete.className = " deleteBtn d-flex justify-content-center";
    btnDelete.innerHTML = '<input id="deleteBtn" class="deteleBtn bg-black" type="button" value="remove">';
    cell7.appendChild(btnDelete);
    row++;

//
    if (priority === "Low") {
        cell3.innerHTML = '<p class= "text-center border rounded-pill bg-danger" >' + priority + '</p>';  // priority.innerHtml - susidubliuoja reiksmes.
        // Man reikia cia info numesti i cell, o ne dar viena reiksme sukurt.
    } else if (priority === "Normal") {
        cell3.innerHTML = '<p class="text-center border rounded-pill bg-primary">' + priority + '</p>';
    } else if (priority === "High") {
        cell3.innerHTML = '<p class="text-center border rounded-pill bg-success">' + priority + '</p>';
    }
    console.log("priority dalis");


    //progres baras

    if (proc === "100%")
        cell6.innerHTML = proc + '<span class="progress">' + '<span class="progress-bar" role="progressbar" ' +
            'style="width: 100%"' + ' aria-valuenow="100" aria-valuemin="0" aria-valuemax="80"></span></span>';
    else if (proc === "75%")
        cell6.innerHTML = proc + '<span class="progress">' + '<span class="progress-bar" role="progressbar" ' +
            'style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="80"></span></span>';
    else if (proc === "50%")
        cell6.innerHTML = proc + '<span class="progress">' + '<span class="progress-bar" role="progressbar" ' +
            'style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="80"></span></span>';
    else if (proc === "25%")
        cell6.innerHTML = proc + '<span class="progress">' + '<span class="progress-bar" role="progressbar" ' +
            'style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="80"></span></span>';
    else if (proc === "0%")
        cell6.innerHTML = proc + '<span class="progress">' + '<span class="progress-bar" role="progressbar" ' +
            'aria-valuenow="0" aria-valuemin="0" aria-valuemax="80"></span></span>';


    //check cross out
    console.log("isbraukti");

    check.addEventListener("click", cross);

    function cross() {
        if (check.checked === true) {
            newRow.style.textDecoration = "line-through";
            newRow.style.opacity = "0.75";
        } else {
            newRow.style.textDecoration = "none";
            newRow.style.opacity = "1";
        }
    }

    //delete mygtuka tvarkom

    btnDelete.addEventListener("click", onDeleteRow);
    function onDeleteRow(e) {
        if (!e.target.classList.contains("deleteBtn")) {
            return;
        }

        const btnDelete = e.target;
        btnDelete.closest("tr").remove();
    }





    // btnDelete.addEventListener("click", function (e){
    //     e.preventDefault();
    //     deleteItem(e.target.parentNode.parentNode.rowIndex);
    // },false);
    //
    // function deleteItem(row){
    //     console.log("f-ja delete");
    //     tableBody.removeChild(row);
    // }

}
``