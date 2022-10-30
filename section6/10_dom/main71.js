const h1 = document.querySelector("h1");
h1.innerHTML = 'AAAAA <span style="color: pink;">BBBBB</span>';
console.log(h1.textContent);
h1.style.color = "red";

const li = document.querySelectorAll("ul > li");
li.forEach((node) => (node.style.color = "purple"));