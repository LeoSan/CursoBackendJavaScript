let modal = document.getElementById('modal');
let btnSpider = document.getElementById('btnSpider');
let btnClose = document.getElementById('btnClose');


if(btnSpider){
    btnSpider.addEventListener("click", function() {
        modal.classList.remove('hidden');
        modal.classList.add('visible');
      });
}

if(btnClose){
  btnClose.addEventListener("click", function() {
    modal.classList.remove('visible');
    modal.classList.add('hidden');
  });
}