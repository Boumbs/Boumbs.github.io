
let keys = ["id", "lastName", "firstName", "email", "address"];

function getServerData(url) {
    let fetcOption = {
        method: "GET",
        mode: "cors",
        cache: "no-cache"
    };

    return fetch(url, fetcOption).then(
        response => response.json(),
        err => console.error(err)
    );
}


function satrtGetOrders() {
    getServerData("http://localhost:3000/orders").then(
        data => fillDataTable(data, 'adminTable'));
}



function fillDataTable(data, tableID) {
    let table = document.querySelector('#'+ tableID);
    if( !table) {
        console.error('Na itt hiba van a tábla ID vel')
        return;
    }
    let tBody = document.querySelector('tbody');
    for ( let row of data) {
        let tr = createElement("tr");
        for ( let x of keys) {
            let td = createElement("td");
            td.innerHTML = row[x];
            tr.appendChild(td);
        }
        let btnGroup = createBtn();
        tr.appendChild(btnGroup);
        tBody.appendChild(tr);
    }
}

function createElement (name, attributes){
let element = document.createElement(name);
for( let k in attributes) {
    element.setAttribute(k, attributes[k]);
}
return element;
}

function createBtn() {
    let group = createElement("div", {class: "btn btn-group"});
    let infoBtn = createElement("button", {class: "btn btn-primary", onclick: "getInfo(this)"});
    infoBtn.innerHTML = '<i class="fa fa-refresh" aria-hidden="true"></i>';
    let dangerBtn = createElement("button", {class: "btn btn-danger", onclick: "delRow(this)"});
    dangerBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

    group.appendChild(infoBtn);
    group.appendChild(dangerBtn);

    let td = createElement("td");
    td.appendChild(group);

    return td;
}




document.querySelector('#button').addEventListener('click', createData);


function createData(){
    let btn = document.querySelector('#button');
    let form = btn.parentElement.parentElement.parentElement;
    let lastName = form.querySelector('input#inputLastName');
    let firstName = form.querySelector('input#inputFirstName');
    let email = form.querySelector('input#inputEmail');
    let address = form.querySelector('input#inputAddress');
    let inputs = [lastName, firstName, email, address];
    // let selectInputDistrict = form.querySelectorAll('input.form-control');
    // let firstDiv = form.querySelector('div:second-child');
    let data = {};
     for( let i = 0; i < inputs.length; i++) {
        data[inputs[i].name] = inputs[i].value;

    } 
    let fetchOption = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    };
    
    fetch(`http://localhost:3000/orders`, fetchOption).then(
        resp => resp.json(),
        err => console.error(err)
    ).then(
        data => satrtGetOrders(data)
    );
}
