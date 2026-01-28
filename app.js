(function(){
  const burger = document.querySelector('[data-burger]');
  const mobile = document.querySelector('[data-mobile]');
  if(burger && mobile){
    burger.addEventListener('click', () => {
      mobile.classList.toggle('show');
      burger.setAttribute('aria-expanded', mobile.classList.contains('show') ? 'true' : 'false');
    });
  }

  const page = document.body.getAttribute('data-page');
  document.querySelectorAll(`[data-nav="${page}"]`).forEach(a => a.classList.add('active'));
})();