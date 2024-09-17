const countDOM = document.querySelector('.count');
const inputDOM = document.querySelector('input');

inputDOM.addEventListener('keyup', () => {
    countDOM.innerText = inputDOM.value.length;
});


