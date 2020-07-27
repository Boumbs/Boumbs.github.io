function calcAmount() {
    let burger = parseInt(document.querySelector('#inputBurger').value);
    let burgerNumber = parseInt(document.querySelector('#inputNumber').value);
    let amountBurgers = burger * burgerNumber


    let baconStatus = document.getElementById('topBacon').checked;
    let eggStatus = document.getElementById('topEgg').checked;
    let meatStatus = document.getElementById('topMeat').checked;

    if (baconStatus == true) {
        amountBurgers = amountBurgers + parseInt(document.getElementById('topBacon').value) * burgerNumber;
    }
    if (eggStatus == true) {
        amountBurgers = amountBurgers + parseInt(document.getElementById('topEgg').value) * burgerNumber;
    }
    if (meatStatus == true) {
        amountBurgers = amountBurgers + parseInt(document.getElementById('topMeat').value) * burgerNumber;
    }

    document.querySelector('#showAmount').innerHTML = amountBurgers;

    if (isNaN(document.querySelector('#showAmount').innerHTML) == true) {
        document.querySelector('#showAmount').innerHTML = 0;
        alert('Kérem válasszon!')
    } 

    alert(amountBurgers + "Ft fizetendő");

}

function paradox() {
    if (
    document.getElementById('topBacon').checked === true ||
    document.getElementById('topEgg').checked === true ||
    document.getElementById('topMeat').checked === true )   { 
        
        document.getElementById('topNon').checked = false;
    }
}

function paradoxOtherWay() {
    document.getElementById('topBacon').checked = false;
    document.getElementById('topEgg').checked = false; 
    document.getElementById('topMeat').checked = false;

}
/* if (
    document.getElementById('topBacon').checked == true ||
    document.getElementById('topEgg') == true ||
    document.getElementById('topMeat') == true
) {
    document.getElementById('topBacon').display = "none";
}
 */
let feedback = document.createElement('div');
document.querySelector('#email').appendChild(feedback);

function validator() {
    document.querySelector('#inputEmail').className = "form-control";
    if (document.querySelector('#inputEmail').value == "") {
        document.querySelector('#inputEmail').className = "is-invalid form-control";
        feedback.innerHTML = "Kérjük javítsa megfelelőre az email címet!";
        feedback.className = "invalid-feedback";
    }
    else if (document.querySelector('#inputEmail').value.indexOf('@') == -1) {
        document.querySelector('#inputEmail').className = "is-invalid form-control";
        feedback.innerHTML = "Kérjük javítsa megfelelőre az email címet, kukacot hülye!";
        feedback.className = "invalid-feedback";
    }
    else if (document.querySelector('#inputEmail').value.indexOf('.') == -1) {
        document.querySelector('#inputEmail').className = "is-invalid form-control";
        feedback.innerHTML = "Kérjük javítsa megfelelőre az email címet, pontot hülye!";
        feedback.className = "invalid-feedback";
    }
    else {
        document.querySelector('#inputEmail').className = "is-valid form-control";
        feedback.innerHTML = "Mindent megfelelőnek találtunk!";
        feedback.className = "valid-feedback";
    }
}




function validatorOthers(input, small) {

    document.querySelector(('#' + input).className = "form-control");

    if (document.querySelector('#' + input).value == "") {
        document.querySelector('#' + input).className = "is-invalid form-control";
        document.querySelector('#' + small).innerHTML = "Kérjük ne hagyja üresen";
        document.querySelector('#' + small).className = "invalid-feedback";
    }
    else {
        document.querySelector('#' + input).className = "is-valid form-control";
        document.querySelector('#' + small).innerHTML = "Mindent rendben találtunk!";
        document.querySelector('#' + small).className = "valid-feedback";
    }
}

/* onkeyup="validatorOthers('inputFirstName', 'smallFirstName')" onclick="validatorOthers('inputFirstName', 'smallFirstName')"

onkeyup="validatorOthers('inputAddress', 'smallAddress')" onclick="validatorOthers('inputAddress', 'smallAddress')"
onkeyup="validatorOthers('inputDistrict', 'smallDistrict')" onclick="validatorOthers('inputDistrict', 'smallDistrict')"
onkeyup="validatorOthers('inputZip', 'smallZip')" onclick="validatorOthers('inputZip', 'smallZip')"
onkeyup="validatorOthers('inputBurger', 'smallBurger')" onclick="validatorOthers('inputBurger', 'smallBurger')"
onkeyup="validatorOthers('inputNumber', 'smallNumber')" onclick="validatorOthers('inputNumber', 'smallNumber')"

*/

function getSelectedOptions(input) {
    let sel = document.querySelector('#' + input);
    let opt;
    for (let x = 0, len = sel.options.length; x < len; x++) {
        opt = sel.options[x];
        if (opt.selected === true) {
            break;
        }
    }
    return opt;
}

function validatorOthersSelect(input, small, text) {

    document.querySelector(('#' + input).className = "form-control");

    if (getSelectedOptions(input).value === text) {
        document.querySelector('#' + input).className = "is-invalid form-control";
        document.querySelector('#' + small).innerHTML = "Kérjük ne hagyja üresen";
        document.querySelector('#' + small).className = "invalid-feedback";
    }
    else {
        document.querySelector('#' + input).className = "is-valid form-control";
        document.querySelector('#' + small).innerHTML = "Mindent rendben találtunk!";
        document.querySelector('#' + small).className = "valid-feedback";
    }
}