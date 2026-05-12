// 點擊 Icon 顯示/隱藏下拉選單
const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

menuBtn.addEventListener('click', function(e) {
  dropdownMenu.classList.toggle('show');
  e.stopPropagation();
});

// 點擊頁面其他地方關閉選單
window.addEventListener('click', function() {
  dropdownMenu.classList.remove('show');
});
