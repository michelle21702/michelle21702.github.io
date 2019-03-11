
let feeling = document.getElementById('feeling')
feeling.innerText=window.prompt('What is your feeling?')

feeling = document.getElementById('Creation')
creation.innerText=window.prompt('What it your creation?')

adjective = document.getElementById('adjective')
adjective.innerText=window.prompt('What is your adjective?')


let button = document.getElementById('change-creation-button');
function changecreation() {
    let creation = document.getElementById('creation');
    creation.innerText=window.prompt('What is your creation?');
}

feeling = document.getElementById('change-feeling-button');
function changefeelings() {
    let creation = document.getElementById('What is your feeling?')
}


button.onclick=changecreation;
button.onclick=changecreation;



