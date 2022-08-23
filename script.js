(() => {
    window.onload = () => {
      let header__container__burger = document.querySelector('.header__container__burger');
      let menu__list = document.querySelector('.menu__list');
      let body = document.querySelector('body');
      header__container__burger.addEventListener('click', (e)=> {
        header__container__burger.classList.toggle('active');
        menu__list.classList.toggle('active');
        body.classList.toggle('lock');
      })
    }
  })();