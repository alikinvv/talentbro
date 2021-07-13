// QUESTIONS SLIDETOGGLE

let slide = (selector) => {
    for (let i = 0; i < selector.length; i++) {
        selector[i].addEventListener('click', function (event) {
            event.preventDefault();

            var container = document.getElementById(this.dataset.slide);
            var _this = this;

            if (!container.classList.contains('active')) {
                _this.classList.add('active');
                container.classList.add('active');
                container.style.height = 'auto';

                var height = container.clientHeight + 'px';
                container.style.height = '0px';

                setTimeout(() => {
                    container.style.height = height;
                }, 0);
            
            } else {
                container.style.height = '0px';
                container.addEventListener('transitionend', () => {
                    _this.classList.remove('active');
                    container.classList.remove('active');
                }, {
                    once: true
                });
            
            }
        });
    }
}

let linkToggle = document.querySelectorAll('.question');
let more = document.querySelectorAll('.more__trigger');

slide(linkToggle);
slide(more);

// MODALS

let links = document.querySelectorAll('[data-modal]:not(.modal)');
let modals = document.querySelectorAll('.modal');
let backdrop = document.querySelector('.backdrop');

links.forEach((trigger) => {
    trigger.addEventListener("click", () => {
        if (!backdrop.classList.contains('active')) {
            backdrop.classList.add('active');
        }

        modalsRemoveActive();

        document.getElementById(trigger.dataset.modal).classList.add("active");
    });
});

let modalsRemoveActive = () => {
    modals.forEach((m) => {
        if (m.classList.contains('active')) {
            m.classList.remove('active');
        }
    });
}

// close modal events
let closeModal = () => {
    if (backdrop.classList.contains('active')) {
        backdrop.classList.remove('active');
    }
    modalsRemoveActive();
}

for (let i = 0; i < document.querySelectorAll('.modal__close').length; i++) {
    document.querySelectorAll('.modal__close')[i].addEventListener('click', closeModal);
};

backdrop.addEventListener("click", (e) => {
    if (backdrop.classList.contains('active')) {
        if (e.target.className === 'backdrop active') {
            closeModal();
        }
    }
});

// // close modal on press ESC
// $(document).keyup((e) => {
//     if (e.keyCode === 27 && $('.backdrop').hasClass('active')) closeModal();
// });

let forms = document.querySelectorAll('form');

forms.forEach((trigger) => {
    trigger.addEventListener("submit", (e) => {
        e.preventDefault();
    });
});

// TABS

let tabBar = document.querySelector('.bar');
let tabsLinks = document.querySelectorAll('.tabs a');
let tabs = document.querySelectorAll('.tab');

if (tabBar !== null) {
    tabBar.style.width = document.querySelector('.tabs a.active').offsetWidth + 'px';
}

tabsLinks.forEach((link) => {
    link.addEventListener("click", function () {
        tabBar.style.width = this.offsetWidth + 'px';
        tabBar.style.left = this.offsetLeft + 'px';

        if (!link.classList.contains('active')) {
            tabsLinks.forEach((link) => {
                link.classList.remove('active');
            });

            tabs.forEach((tab) => {
                tab.classList.remove('active');
            });

            this.classList.add('active');
            document.getElementById(this.dataset.tab).classList.add("active");
        }
    });
});

let plans = document.querySelectorAll('.plans__item');

plans.forEach((plan) => {
    plan.addEventListener("click", function () {
        if (!this.classList.contains('active')) {
            plans.forEach((plan) => {
                plan.classList.remove('active');
            });

            this.classList.add('active');
        }
    });
});

let search = document.querySelector('.search');

document.querySelectorAll('.search__btn').forEach((btn) => {
    btn.addEventListener("click", () => {
        if (search.classList.contains('active')) {
            search.classList.remove('active');
        } else {
            search.classList.add('active');
        }
    });
});

document.querySelectorAll('.search__list a').forEach((link) => {
    link.addEventListener("click", function () {
        if (this.classList.contains('selected')) {
            this.classList.remove('selected');
        } else {
            this.classList.add('selected');
        }
    });
});

if (document.querySelector('.constructor') !== null) {
    let sidebar = document.querySelector('.constructor');

    document.querySelector('.sidebar__trigger').addEventListener("click", () => {
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        } else {
            sidebar.classList.add('active');
        }
    });
}

if (document.querySelector('.download') !== null) {
    let download = document.querySelector('.download');

    document.querySelector('.download__menu').addEventListener("click", () => {
        if (download.classList.contains('active')) {
            download.classList.remove('active');
        } else {
            download.classList.add('active');
        }
    });
}

if (document.querySelector('.share') !== null) {
    let share = document.querySelector('.share');

    document.querySelector('.share > .btn').addEventListener("click", () => {
        if (share.classList.contains('active')) {
            share.classList.remove('active');
        } else {
            share.classList.add('active');
        }
    });
}

if (document.querySelector('.exx') !== null) {
    let exx = document.querySelector('.exx');

    document.querySelector('.editor__right').addEventListener("click", () => {
        if (exx.classList.contains('active')) {
            exx.classList.remove('active');
        } else {
            exx.classList.add('active');
        }
    });
}

if (document.querySelector('.dropdown__list') !== null) {
    let dropdown = document.querySelector('.dropdown__list');

    document.querySelector('.dropdown__trigger').addEventListener("click", function () {
        if (dropdown.classList.contains('active')) {
            dropdown.classList.remove('active');
            this.classList.remove('active');
        } else {
            dropdown.classList.add('active');
            this.classList.add('active');
        }
    });
}

if (document.querySelector('.skills__dropdown') !== null) {
    let skills = document.querySelector('.skills__dropdown');

    document.querySelector('.skills__search input').addEventListener("click", () => {
        if (skills.classList.contains('active')) {
            skills.classList.remove('active');
        } else {
            skills.classList.add('active');
        }
    });
}

document.querySelectorAll('.template__img').forEach((template) => {
    template.addEventListener("click", function () {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            this.classList.add('active');
        }
    });
});

let colors = document.querySelectorAll('.colors div');

colors.forEach((color) => {
    color.addEventListener("click", function () {
        if (!this.classList.contains('active')) {
            colors.forEach((color) => {
                color.classList.remove('active');
            });

            this.classList.add('active');
        }
    });
});

if (document.querySelector('#nouislider') !== null) {
    var rangeSlider = document.getElementById('nouislider');

    noUiSlider.create(rangeSlider, {
        start: [16],
        connect: 'lower',
        range: {
            'min': 10,
            'max': 56
        },
    });
}

if (document.querySelector('.change') !== null) {
    console.log(document.querySelector('.change__right').offsetHeight)
    document.querySelector('.change__right').style.height = document.querySelector('.change .container').offsetHeight + 'px';
    document.querySelector('.change__right').classList.add('active');
}

var swiper = new Swiper(".steps .slider__navigation", {
    spaceBetween: 10,
    slidesPerView: 1,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".steps .slider__main", {
    spaceBetween: 40,
    slidesPerView: 1,
    thumbs: {
        swiper: swiper,
    },
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: ".steps .swiper-pagination",
    }
});

let progress = () => {
    document.querySelector('.reviews .slider__progress').classList.remove('active');
    
    setTimeout(() => {
        document.querySelector('.reviews .slider__progress').classList.add('active');
    }, 10)
}

var reviews = new Swiper(".reviews .slider__main", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".reviews .slider__arrow.next",
        prevEl: ".reviews .slider__arrow.prev",
    },
    on: {
        init: progress,
        slideChange: progress
    },
    breakpoints: {
        768: {
            slidesPerView: "auto",
            spaceBetween: 0,
        },
    },
    pagination: {
        el: ".reviews .swiper-pagination",
    }
});

if (document.getElementById('phone-mask') !== null) {
    var phoneMask = IMask(
    document.getElementById('phone-mask'), {
        mask: '+{7}(000)000-00-00'
    });
}

if (document.querySelector('.hamburger') !== null) {
    let hamburger = document.querySelector('.hamburger');
    let menu = document.querySelector('.menu.mobile');
    let body = document.querySelector('body');

    hamburger.addEventListener("click", () => {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            body.classList.remove('overflow');
        } else {
            menu.classList.add('active');
            body.classList.add('overflow');
        }
    });
}

if (document.querySelector('.menu__close') !== null) {
    let close = document.querySelector('.menu__close');
    let menu = document.querySelector('.menu.mobile');
    let body = document.querySelector('body');

    close.addEventListener("click", () => {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            body.classList.remove('overflow');
        } else {
            menu.classList.add('active');
            body.classList.add('overflow');
        }
    });
}

if (document.querySelector('.services__select') !== null) {
    let select = document.querySelector('.services__select select');

    select.addEventListener("change", () => {
        let cards = document.querySelectorAll('.services__item');

        cards.forEach((card) => {
            card.classList.remove('active');

            if (card.dataset.tag === select.value) {
                card.classList.add('active');
            }

            if (select.value === 'all') {
                card.classList.add('active');
            }
        });
    });
}