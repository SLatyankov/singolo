/*переключение меню кликами*/
const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

/*переключение меню при скролле*/

const HAMBURGER_LINKS = document.querySelectorAll('li>a');
document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const CURPOS = window.scrollY + 105;
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
            HAMBURGER_LINKS.forEach((a) => {
                a.classList.remove('active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                };
            })
        }
    })
}

/* гамбургер*/
const HAMBURGER = document.querySelectorAll('.hamburger');
const HAMBURGER_MENU = document.getElementById('hamburger-menu');


HAMBURGER.forEach(element => {
    element.addEventListener('click', (event) => {
        HAMBURGER_MENU.classList.toggle('hidden');
    });
});

HAMBURGER_LINKS.forEach(element => {
    element.addEventListener('click', (event) => {
        HAMBURGER_MENU.classList.add('hidden');
    });
});




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
let slides = document.querySelectorAll('.slide');
let currentSlides = 0;
let isEnabled = true;

function changeCurrentSlides(n) {
    currentSlides = (n + slides.length) % slides.length;
}

function hideSlid(direction) {
    isEnabled = false;
    slides[currentSlides].classList.add(direction);
    slides[currentSlides].addEventListener('animationend', function () {
        this.classList.remove('active', direction);
    })
}

function showSlid(direction) {
    slides[currentSlides].classList.add('next', direction);
    slides[currentSlides].addEventListener('animationend', function () {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    })
}

function previousSlid(n) {
    hideSlid('to-right');
    changeCurrentSlides(n - 1);
    showSlid('from-left');
}

function nextSlid(n) {
    hideSlid('to-left');
    changeCurrentSlides(n + 1);
    showSlid('from-right');
}

LEFT_ARROW.addEventListener('click', function () {
    document.querySelector('.slider-wrapper').classList.toggle('blue');
    if (isEnabled) {
        previousSlid(currentSlides);
    }
})

RIGHT_ARROW.addEventListener('click', function () {
    document.querySelector('.slider-wrapper').classList.toggle('blue');
    if (isEnabled) {
        nextSlid(currentSlides);
    }
})

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
const subjectExp = document.getElementById('subject_exp');
const textarea = document.getElementById('textarea_exp');
let subjectImp = document.getElementById('subject_imp');
let textareaImp = document.getElementById('textarea_imp');
const name = document.getElementById('name_exp');
const mail = document.getElementById('mail_exp');


function subject(string) {
    if (string === '') {
        return 'Без темы';
    } else {
        return 'Тема: ' + string;
    }
}

function describe(string) {
    if (string === '') {
        return 'Без описания';
    } else {
        return 'Описание: ' + string;
    }
}


BUTTON.addEventListener('click', (event) => {
    event.preventDefault();
    if (name.checkValidity() && mail.checkValidity()) {
        subjectImp.innerText = subject(subjectExp.value.toString());
        textareaImp.innerText = describe(textarea.value.toString());
        document.getElementById('message-block').classList.remove('hidden');
    }

});

/*очистка полей*/
const CLOSE_BUTTON = document.getElementById('close-btn');

CLOSE_BUTTON.addEventListener('click', (event) => {
    document.querySelectorAll('input').forEach(el => el.value = '');
    textarea.value = '';
    document.getElementById('message-block').classList.add('hidden');
});