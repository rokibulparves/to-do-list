let input = document.getElementById('input');
let button = document.getElementById('button');
let list = document.getElementById('list-container');

button.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = input.value;
    list.appendChild(paragraph);
    input.value = '';

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';

    })

    paragraph.addEventListener('dblclick', function(){
        list.removeChild(paragraph);
    })

})