const open = document.getElementById('logo1')
const close = document.getElementById('logo2')
const slidedown = document.querySelector('.secondnav')

open.addEventListener('click', () => slidedown.classList.remove('active'))
open.addEventListener('click', () => open.classList.add('active'))
open.addEventListener('click', () => close.classList.remove('active'))




close.addEventListener('click', () => slidedown.classList.add('active'))
close.addEventListener('click', () => close.classList.add('active'))
close.addEventListener('click', () => open.classList.remove('active'))