const child = document.querySelector('.child');
const cb = function(entries, observer) {
  // alert('intersecting');
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      console.log('監視要素が画面に入った');
      entry.target.classList.add('inview');
      // observer.unobserve(entry.target);
    } else {
      console.log('監視要素が画面から出た');
      entry.target.classList.remove('inview');
    }
  })
}
const option = {
  rootMargin: "-300px 0px 0px 0px"
}
const io = new IntersectionObserver(cb);
io.observe(child);