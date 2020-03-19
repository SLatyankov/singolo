/*переключение меню кликами*/
const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

/*переключение меню при скролле*/

document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const CURPOS = window.scrollY;
    const SECTIONS = document.querySelectorAll('main>section');
    const LINKS = document.querySelectorAll('nav>a');

    SECTIONS.forEach((el) => {
        if (el.offsetTop <= CURPOS && (el.offsetTop + el.offsetHeight) > CURPOS) {
            LINKS.forEach((a) => {
                a.classList.remove('active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                };
            })
        }
    })
}

/*Экраны телефонов*/
const V_PHONE = document.getElementById('vertical_phone');
const H_PHONE = document.getElementById('horizontal_phone');

V_PHONE.addEventListener('click', (event) => {
    const display1 = document.getElementById('display1');
    display1.classList.toggle('hidden');
})

H_PHONE.addEventListener('click', (event) => {
    const display2 = document.getElementById('display2');
    display2.classList.toggle('hidden');
})

/*смещение слайдов*/
const LEFT_ARROW = document.getElementById('left_arrow');
const RIGHT_ARROW = document.getElementById('right_arrow');

/*перемешивание картинок*/
const TAGS = document.getElementById('tags');
const IMAGES = document.getElementById('images');

TAGS.addEventListener('click', (event) => {
    const PICTURE = document.getElementById('images').lastChild;
    IMAGES.prepend(PICTURE);
    TAGS.querySelectorAll('button').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

/*отправка формы*/
const BUTTON = document.getElementById('submit');

BUTTON.addEventListener('click', (event) => {
    const subject = document.getElementById('subject_exp').value.toString();
    document.getElementById('subject_imp').innerText = subject;
    const textarea = document.getElementById('textarea_exp').value.toString();
    document.getElementById('textarea_imp').innerText = textarea;
    document.getElementById('message-block').classList.remove('hidden');
});

/*очистка полей*/
const CLOSE_BUTTON = document.getElementById('close-btn');

CLOSE_BUTTON.addEventListener('click', (event) => {
    document.getElementById('subject_imp').innerText = '';
    document.getElementById('textarea_imp').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
});

