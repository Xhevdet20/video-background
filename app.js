let menuToggle = document.querySelector('.toggle');
let showcase = document.querySelector('.showcase')

menuToggle.addEventListener('click', function(){
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
})