document.addEventListener('DOMContentLoaded', function() 
{
  const btn = document.querySelector('#btn');
  const ta = new TextAnimation('.animate-title');
  ta.animate();
  btn.addEventListener('click', ta.animate.bind(ta));
});

class TextAnimation {
  constructor(el) {
    console.log(this);
    this.el = document.querySelector(el)
    this.chars = this.el.innerHTML.split("");
    this.el.innerHTML = this._splitText();
  }
  _splitText() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, '&nbsp;');
      return  `${acc}<span class="char">${curr}</span>`;
    }, "");
  }
  animate() {
    console.log(this);
    this.el.classList.toggle('inview');
    // console.log(this);
    // window.setTimeout(function() {
    //   console.log(this);
    //   this.el.classList.toggle('inview');
    // }.bind(this));

    // const _that = this;
    // window.setTimeout(function() {
    //   console.log(_that);
    //   _that.el.classList.toggle('inview');
    // });
  }
}