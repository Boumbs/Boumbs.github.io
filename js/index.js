document.querySelector('#goAdmin').addEventListener("click", goAdmin);


function goAdmin() {
    
    let password = document.querySelector('input.form-control').value;
    if(password == "envokakiraly") {
        window.open("db.html");
    } else {
        alert("nem jó a jelszó");
    }
}