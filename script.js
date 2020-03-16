const MENU = document.getElementById('menu');
const V_PHONE = document.getElementById('vertical_phone');
const H_PHONE = document.getElementById('horizontal_phone');
const TAGS = document.getElementById('tags');
const IMAGES = document.getElementById('images');
const BUTTON = document.getElementById('submit');
const CLOSE_BUTTON = document.getElementById('close-btn');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active')) ;
    event.target.classList.add('active');
});

V_PHONE.addEventListener('click', (event) => {
    const display1 = document.getElementById('display1');
    display1.classList.toggle('hidden');
})

H_PHONE.addEventListener('click', (event) => {
    const display2 = document.getElementById('display2');
    display2.classList.toggle('hidden');
})

TAGS.addEventListener('click', (event) => {
    TAGS.querySelectorAll('button').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

IMAGES.addEventListener('click', (event) => {
    IMAGES.querySelectorAll('div').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

BUTTON.addEventListener('click', (event) => {
    const subject = document.getElementById('subject_exp').value.toString();
    document.getElementById('subject_imp').innerText = subject;
    const textarea = document.getElementById('textarea_exp').value.toString();
    document.getElementById('textarea_imp').innerText = textarea;
    document.getElementById('message-block').classList.remove('hidden');
});

CLOSE_BUTTON.addEventListener('click', (event) => {
    document.getElementById('subject_imp').innerText = '';
    document.getElementById('textarea_imp').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
});