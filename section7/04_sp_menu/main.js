class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector(".mobile-menu__btn");
    this.DOM.cover = document.querySelector(".mobile-menu__cover");
    this.DOM.container = document.querySelector("#global-container");
    this.eventType = this._getEventType();
    this._addEvent();
  }

  /** スマホかPCかでイベントを分ける用の関数 */
  _getEventType() {
    const isTouchCapable =
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch);
    navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;
    return isTouchCapable ? "touchstart" : "click";
  }

  /** 全体(#global-container)にクラス(.menu-open)をつけたり消したり */
  _toggle() {
    this.DOM.container.classList.toggle("menu-open");
  }

  /** イベント登録用の関数 */
  _addEvent() {
    this.DOM.btn.addEventListener("click", this._toggle.bind(this));
    this.DOM.cover.addEventListener("click", this._toggle.bind(this)); //ボタンだけでなくcover自体押せば閉じるようにしてあげる
  }
}
new MobileMenu();
