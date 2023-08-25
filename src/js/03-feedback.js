import throttle from 'lodash.throttle';

const FEEDBACK_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const formEmail = form.querySelector('input[name="email"]');
const formMessage = form.querySelector('textarea[name="message"]');

form.addEventListener('input', throttle(inputData, 500));
form.addEventListener('submit', onFormSubmit);

function inputData() {
    const formData = {
        email: formEmail.value,
        message: formMessage.value
    };
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}

function onPageReload() {
    const data = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
    if (data) {
        formEmail.value = data.email || '';
        formMessage.value = data.message || '';
    }
};

onPageReload();

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
