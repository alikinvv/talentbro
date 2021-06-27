"use strict";

// QUESTIONS SLIDETOGGLE
var slide = function slide(selector) {
  for (var i = 0; i < selector.length; i++) {
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
        setTimeout(function () {
          container.style.height = height;
        }, 0);
      } else {
        container.style.height = '0px';
        container.addEventListener('transitionend', function () {
          _this.classList.remove('active');

          container.classList.remove('active');
        }, {
          once: true
        });
      }
    });
  }
};

var linkToggle = document.querySelectorAll('.question');
var more = document.querySelectorAll('.more__trigger');
slide(linkToggle);
slide(more); // MODALS

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

for (var i = 0; i < document.querySelectorAll('.modal__close').length; i++) {
  document.querySelectorAll('.modal__close')[i].addEventListener('click', closeModal);
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

if (tabBar !== null) {
  tabBar.style.width = document.querySelector('.tabs a.active').offsetWidth + 'px';
}

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
var search = document.querySelector('.search');
document.querySelectorAll('.search__btn').forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (search.classList.contains('active')) {
      search.classList.remove('active');
    } else {
      search.classList.add('active');
    }
  });
});
document.querySelectorAll('.search__list a').forEach(function (link) {
  link.addEventListener("click", function () {
    if (this.classList.contains('selected')) {
      this.classList.remove('selected');
    } else {
      this.classList.add('selected');
    }
  });
});

if (document.querySelector('.constructor') !== null) {
  var sidebar = document.querySelector('.constructor');
  document.querySelector('.sidebar__trigger').addEventListener("click", function () {
    if (sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
    } else {
      sidebar.classList.add('active');
    }
  });
}

if (document.querySelector('.download') !== null) {
  var download = document.querySelector('.download');
  document.querySelector('.download__menu').addEventListener("click", function () {
    if (download.classList.contains('active')) {
      download.classList.remove('active');
    } else {
      download.classList.add('active');
    }
  });
}

if (document.querySelector('.share') !== null) {
  var share = document.querySelector('.share');
  document.querySelector('.share > .btn').addEventListener("click", function () {
    if (share.classList.contains('active')) {
      share.classList.remove('active');
    } else {
      share.classList.add('active');
    }
  });
}

if (document.querySelector('.exx') !== null) {
  var exx = document.querySelector('.exx');
  document.querySelector('.editor__right').addEventListener("click", function () {
    if (exx.classList.contains('active')) {
      exx.classList.remove('active');
    } else {
      exx.classList.add('active');
    }
  });
}

if (document.querySelector('.dropdown__list') !== null) {
  var dropdown = document.querySelector('.dropdown__list');
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
  var skills = document.querySelector('.skills__dropdown');
  document.querySelector('.skills__search input').addEventListener("click", function () {
    if (skills.classList.contains('active')) {
      skills.classList.remove('active');
    } else {
      skills.classList.add('active');
    }
  });
}

document.querySelectorAll('.template__img').forEach(function (template) {
  template.addEventListener("click", function () {
    if (this.classList.contains('active')) {
      this.classList.remove('active');
    } else {
      this.classList.add('active');
    }
  });
});
var colors = document.querySelectorAll('.colors div');
colors.forEach(function (color) {
  color.addEventListener("click", function () {
    if (!this.classList.contains('active')) {
      colors.forEach(function (color) {
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
    }
  });
}

var swiper = new Swiper(".steps .slider__navigation", {
  spaceBetween: 10,
  slidesPerView: 1,
  watchSlidesVisibility: true,
  watchSlidesProgress: true
});
var swiper2 = new Swiper(".steps .slider__main", {
  spaceBetween: 40,
  thumbs: {
    swiper: swiper
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  }
});

var progress = function progress() {
  document.querySelector('.reviews .slider__progress').classList.remove('active');
  setTimeout(function () {
    document.querySelector('.reviews .slider__progress').classList.add('active');
  }, 10);
};

var reviews = new Swiper(".reviews .slider__main", {
  slidesPerView: "auto",
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".reviews .slider__arrow.next",
    prevEl: ".reviews .slider__arrow.prev"
  },
  on: {
    init: progress,
    slideChange: progress
  }
});