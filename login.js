const imput = document.querySelector('.login__input');
const button = document.querySelector('.login__buttom');
const form = document.querySelector('.login__form');



const valideInput = ({ target }) => {
    if (target.value.length > 2 ) {
        button.removeAttribute('disabled');
        return;
    }
    button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', imput.value);
    window.location = 'pages/home.html';
}


imput.addEventListener('input', valideInput);
form.addEventListener('submit', handleSubmit);

