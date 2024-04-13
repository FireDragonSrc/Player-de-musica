const click = document.querySelector('.inputDarkMode');
click.addEventListener('click',() => {
    let element = document.querySelector('.container');
    element.classList.toggle('darkMode');
    let text = document.querySelector('.musciName');
    text.classList.toggle('colorWhite');
  });