
const divs = document.querySelectorAll('.img');

divs.forEach(div => {
  // Quando o mouse entra
  div.addEventListener('mouseenter', () => {
    div.classList.add('menor');
    console.log("entrou");
  });

  // Quando o mouse sai
  div.addEventListener('mouseleave', () => {
    div.classList.remove('menor');
    console.log("saiu");
  });
});
