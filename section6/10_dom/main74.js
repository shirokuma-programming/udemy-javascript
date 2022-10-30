document.addEventListener('DOMContentLoaded', function() 
{
  const el = document.querySelector('.animate-title');
  console.log(el.innerHTML);
  const str = el.innerHTML.split("");

  // let concatStar = '';
  // for (let c of str) {
  //   c = c.replace(/\s+/, '&nbsp;');
  //   concatStar += `<span class="char">${c}</span>`;
  // }
  // el.innerHTML = concatStar;

  el.innerHTML = str.reduce((acc, curr) => {
    curr = curr.replace(/\s+/, '&nbsp;');
    return  `${acc}<span class="char">${curr}</span>`;
  }, "");
  console.log(el.innerHTML);
});