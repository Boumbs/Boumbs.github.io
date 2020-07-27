
let keys = ["id", "lastName", "firstName", "email", "address"]

function getServerData(url) {
    let fetchOption = {
        method: "GET",
        mode: "cors",
        cache: "no-cache"
    };

    return fetch(url, fetchOption).then(
        response => response.json(),
        err => console.error(err)
    );
}


function startGetOrders() {
    getServerData("http://localhost:3000/orders").then(
        data => fillDataTable(data, 'adminTable'));
}

document.querySelector('#getServerDataBtn').addEventListener('click', startGetOrders);

function fillDataTable(data, tableID) {
    let table = document.querySelector('#' + tableID);
    if( !table) {
        console.error('Na itt hiba van a tábla ID vel')
        return;
    }
    let tBody = document.querySelector('tbody');
    tBody.innerHTML = "";
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

function delRow (btn) {
let tr = btn.parentElement.parentElement.parentElement;
let id = tr.querySelector("td:first-child").innerHTML;

let fetchOption = {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache"
    };
    if (confirm("Biztosan törli a felhasználót?")) {
    fetch(`http://localhost:3000/orders/${id}`, fetchOption).then(
        resp => resp.json(),
        err => console.error(err)
    ).then(
        data => {
            startGetOrders();
        }
    );
    }
}

var isNumber = function isNumber(value) 
{
   return typeof value === 'number' && isFinite(value);
}


function getInfo (btn) {
   let tr = btn.parentElement.parentElement.parentElement;
   let inputs = tr.querySelectorAll('td');

   let table = document.querySelector('#adminTable');
   let tBody = document.querySelector('tbody');
       for ( let x of inputs) {
           
           if(x.children.length == 1 || isNumber(parseInt(x.innerHTML)) ) {
               x = x
           } else{
               let input = createElement('input', {
                 class: "form-control",
                 value: x.innerHTML
               });
             x.innerHTML = "";
             x.appendChild(input);
               
           }
          
            } 

           }
     
    






