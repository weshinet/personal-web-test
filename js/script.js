const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

menuBtn.addEventListener('click', function(e) {
  dropdownMenu.classList.toggle('show');
  e.stopPropagation();
});

window.addEventListener('click', function() {
  dropdownMenu.classList.remove('show');
});
