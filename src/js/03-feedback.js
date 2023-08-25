import throttle from 'lodash.throttle';

const FEEDBACK_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const formEmail = form.querySelector('input[name="email"]');
const formMessage = form.querySelector('textarea[name="message"]');

form.addEventListener('input', throttle(inputData, 500));
form.addEventListener('submit', onFormSubmit);

// Firstly, the object with the form data has been created and the values are now assigned 
//to the keys.
//Local Storage data has been setted and converted to string.
function inputData() {
    const formData = {
        email: formEmail.value,
        message: formMessage.value
    };
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}

//Created new constant to use it, when the page will be reloaded.
//Added the verification if there are some values in the input to put them back,
//while reloading. 

function onPageReload() {
    const data = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
    if (data) {
        formEmail.value = data.email || '';
        formMessage.value = data.message || '';
    }
};

onPageReload();

//Created new constants and used it to check if all the fiels has been filled.
//New object also has been created to console.log submitted user data.

function onFormSubmit(e) {
    e.preventDefault();

    const emailData = formEmail.value;
    const messageData = formMessage.value;

    if (emailData === "" || messageData === '') {
        return alert('Please, fill all the fields!')
    }

    const dataResult = {
        emailData,
        messageData
    };
    console.log(dataResult);

    localStorage.removeItem(FEEDBACK_KEY);
    formEmail.value = '';
    formMessage.value = '';
}
