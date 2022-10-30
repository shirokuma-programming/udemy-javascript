const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');

// function hello() {
//     // alert('hello');
//     this.style.color = 'red';
//     console.log(this);
// }
// btn.addEventListener('click', hello);

function changeColor() {
    h1.style.color = 'pink';
}
function changeBgColor() {
    h1.style.backgroundColor = 'green';
}
btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBgColor);