document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav');

    function onScroll(){
      nav.classList.toggle('scrolled', window.scrollY > 10);
    }

    onScroll(); // estado inicial (caso a página abra já rolada)
    window.addEventListener('scroll', onScroll, { passive: true });
});

  document.getElementById('year').textContent = new Date().getFullYear();