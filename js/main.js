'use strict';
{
const open = document.getElementById('menuOpen');
const overlay = document.querySelector('.overlay');
const close = document.getElementById('menuClose');

open.addEventListener('click',() => {
  overlay.classList.add('show');
  open.classList.add('hide');
});
close.addEventListener('click',() => {
  overlay.classList.remove('show');
  open.classList.remove('hide');
});
}