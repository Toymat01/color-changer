let index = 0;
let body = document.querySelector('body');

function changeColor(){
    let colors = ['red', 'yellow', 'blue', 'black', 'green','purple', 'white'];
    body.style.background = colors[index++];

    if(index > colors.length -1)
    index = 0;

};