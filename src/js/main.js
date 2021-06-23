// QUESTIONS SLIDETOGGLE

let linkToggle = document.querySelectorAll('.question');

for (let i = 0; i < linkToggle.length; i++) {
    linkToggle[i].addEventListener('click', function (event) {
        event.preventDefault();
        let container = document.getElementById(this.dataset.question);
        let question = this;

        if (!container.classList.contains('active')) {
            question.classList.add('active');
            container.classList.add('active');
            container.style.height = 'auto';

            let height = container.clientHeight + 'px';
            container.style.height = '0px';

            setTimeout(() => {
                container.style.height = height;
            }, 0);
        } else {
            container.style.height = '0px';
            question.classList.remove('active');

            container.addEventListener('transitionend', () => {
                container.classList.remove('active');
            }, {
                once: true
            });
        }
    });
}

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

tabBar.style.width = document.querySelector('.tabs a.active').offsetWidth + 'px';

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