document.getElementById('menu-icon').addEventListener('click',function(){var navLinks=document.getElementById('nav-links');var menuIcon=document.getElementById('menu-icon');var menuLogo=document.getElementById('menu-logo');navLinks.classList.toggle('active');if(navLinks.classList.contains('active')){menuIcon.src="./assets/img/fechar-menu.webp";menuLogo.classList.add('visible');item.addEventListener("click",()=>{navLinks.classList.toggle("active",!1)
menuIcon.src="/assets/img/abrir-menu.png";menuLogo.classList.remove('visible')})}else{menuIcon.src="/assets/img/abrir-menu.png";menuLogo.classList.remove('visible')}})
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    if (!track) return; 
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const dotsNav = document.querySelector('.carousel-nav');
    const dots = Array.from(dotsNav.children);
    const slideWidth = slides[0].getBoundingClientRect().width;
    const moveToSlide = (currentSlide, targetSlide) => {
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide'); };
    const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove('current-slide');
        targetDot.classList.add('current-slide'); };
    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling || slides[0];
        const currentDot = dotsNav.querySelector('.current-slide');
        const nextDot = currentDot.nextElementSibling || dots[0];
        moveToSlide(currentSlide, nextSlide);
        updateDots(currentDot, nextDot); });
    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
        const currentDot = dotsNav.querySelector('.current-slide');
        const prevDot = currentDot.previousElementSibling || dots[dots.length - 1];
        moveToSlide(currentSlide, prevSlide);
        updateDots(currentDot, prevDot); });
    dotsNav.addEventListener('click', e => {
        const targetDot = e.target.closest('button');
        if (!targetDot) return;
        const currentSlide = track.querySelector('.current-slide');
        const currentDot = dotsNav.querySelector('.current-slide');
        const targetIndex = dots.findIndex(dot => dot === targetDot);
        const targetSlide = slides[targetIndex];
        moveToSlide(currentSlide, targetSlide);
        updateDots(currentDot, targetDot); });
    setInterval(() => {
        nextButton.click();
    }, 5000); });
    window.addEventListener('scroll', function() {
        const botaoFlutuante = document.querySelector('.whatsapp');
        if (window.scrollY > 200) {
            botaoFlutuante.classList.add('show');
        } else {
            botaoFlutuante.classList.remove('show');
        }
    });