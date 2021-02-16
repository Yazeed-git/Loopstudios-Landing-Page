const menuOpen = document.querySelector('#menu-open')
      menuClose = document.querySelector('#menu-close')
      nav = document.getElementById('navbar');

menuOpen.addEventListener('click', () => {
    nav.classList.add('hide');
})

menuClose.addEventListener('click', () => {
    nav.classList.remove('hide');
})


