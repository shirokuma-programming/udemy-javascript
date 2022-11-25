document.addEventListener("DOMContentLoaded", function () {
  new MobileMenu();
  new Main();
});

class Main {
  constructor() {
    this.header = document.querySelector(".header");
    this.hero = new HeroSlider(".swiper");
    this._observers = [];
    this._init();
  }

  _init() {
    new MobileMenu();
    this._scrollInit();
  }

  destroy() {
    this._observers.forEach(so.destroy());
  }

  _scrollInit() {
    this._observers.push(
      new ScrollObserver(".nav-trigger", this._navAnimation.bind(this), { once: false }),
      new ScrollObserver(".swiper", this._toggleSlideAnimation.bind(this), { once: false }),
      new ScrollObserver(".cover-slide", this._inviewAnimation),
      new ScrollObserver(".tween-animate-title", this._textAnimation)
    )
  }

  _toggleSlideAnimation(el, inview) {
    if (inview) {
      this.hero.start();
    } else {
      this.hero.stop();
    }
  }

  _textAnimation(el, isIntersecting) {
    if (isIntersecting) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  }

  _inviewAnimation(el, inview) {
    if (inview) {
      el.classList.add("inview");
    } else {
      el.classList.remove("inview");
    }
  }

  _navAnimation(el, inview) {
    if (inview) {
      this.header.classList.remove("triggerd");
    } else {
      this.header.classList.add("triggerd");
    }
  }
}
