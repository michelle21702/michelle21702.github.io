
let feeling = document.getElementById('feeling')
feeling.innerText=window.prompt('What is your feeling?')

let button = document.getElementById('change-creation-button');
function changecreation() {
    let creation = document.getElementById('creation');
    creation.innerText=window.prompt('What is your creation?');
}
button.onclick=changecreation;