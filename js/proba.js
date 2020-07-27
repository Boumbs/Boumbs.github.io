function setRow(btn){
let tr = btn.parentElement.parentElement.parentElement;
    // itt van a függvény ami kiszedi a sorok értékét
let data = getRowData(tr);
    let fetchOption = {
        // itt frissit puttal
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(`http://localhost:3000/orders/${data.id}`, fetchOption).then(
        resp => resp.json(),
        err => console.error(err)
    ).then(
        data => satrtGetOrders()
    );
}