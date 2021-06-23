"use strict";

// QUESTIONS SLIDETOGGLE
var linkToggle = document.querySelectorAll('.question');

for (var i = 0; i < linkToggle.length; i++) {
  linkToggle[i].addEventListener('click', function (event) {
    event.preventDefault();
    var container = document.getElementById(this.dataset.question);
    var question = this;

    if (!container.classList.contains('active')) {
      question.classList.add('active');
      container.classList.add('active');
      container.style.height = 'auto';
      var height = container.clientHeight + 'px';
      container.style.height = '0px';
      setTimeout(function () {
        container.style.height = height;
      }, 0);
    } else {
      container.style.height = '0px';
      question.classList.remove('active');
      container.addEventListener('transitionend', function () {
        container.classList.remove('active');
      }, {
        once: true
      });
    }
  });
} // MODALS


var links = document.querySelectorAll('[data-modal]:not(.modal)');
var modals = document.querySelectorAll('.modal');
var backdrop = document.querySelector('.backdrop');
links.forEach(function (trigger) {
  trigger.addEventListener("click", function () {
    if (!backdrop.classList.contains('active')) {
      backdrop.classList.add('active');
    }

    modalsRemoveActive();
    document.getElementById(trigger.dataset.modal).classList.add("active");
  });
});

var modalsRemoveActive = function modalsRemoveActive() {
  modals.forEach(function (m) {
    if (m.classList.contains('active')) {
      m.classList.remove('active');
    }
  });
}; // close modal events


var closeModal = function closeModal() {
  if (backdrop.classList.contains('active')) {
    backdrop.classList.remove('active');
  }

  modalsRemoveActive();
};

for (var _i = 0; _i < document.querySelectorAll('.modal__close').length; _i++) {
  document.querySelectorAll('.modal__close')[_i].addEventListener('click', closeModal);
}

;
backdrop.addEventListener("click", function (e) {
  if (backdrop.classList.contains('active')) {
    if (e.target.className === 'backdrop active') {
      closeModal();
    }
  }
}); // // close modal on press ESC
// $(document).keyup((e) => {
//     if (e.keyCode === 27 && $('.backdrop').hasClass('active')) closeModal();
// });

var forms = document.querySelectorAll('form');
forms.forEach(function (trigger) {
  trigger.addEventListener("submit", function (e) {
    e.preventDefault();
  });
}); // TABS

var tabBar = document.querySelector('.bar');
var tabsLinks = document.querySelectorAll('.tabs a');
var tabs = document.querySelectorAll('.tab');
tabBar.style.width = document.querySelector('.tabs a.active').offsetWidth + 'px';
tabsLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    tabBar.style.width = this.offsetWidth + 'px';
    tabBar.style.left = this.offsetLeft + 'px';

    if (!link.classList.contains('active')) {
      tabsLinks.forEach(function (link) {
        link.classList.remove('active');
      });
      tabs.forEach(function (tab) {
        tab.classList.remove('active');
      });
      this.classList.add('active');
      document.getElementById(this.dataset.tab).classList.add("active");
    }
  });
});
var plans = document.querySelectorAll('.plans__item');
plans.forEach(function (plan) {
  plan.addEventListener("click", function () {
    if (!this.classList.contains('active')) {
      plans.forEach(function (plan) {
        plan.classList.remove('active');
      });
      this.classList.add('active');
    }
  });
});