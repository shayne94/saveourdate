var large_index = 1;
Box_Large(large_index);

function Menu_Large(n) {
  Box_Large(large_index = n);
}

function Box_Large(n) {
  var i;
  var box_large = document.getElementsByClassName("model__inner");
  var menu_large = document.getElementsByClassName("header__sub--item");
  if (n > box_large.length) {large_index = 1}
  if (n < 1) {large_index = box_large.length}
  for (i = 0; i < box_large.length; i++) {
      box_large[i].style.display = "none";
  }
  for (i = 0; i < menu_large.length; i++) {
      menu_large[i].className = menu_large[i].className.replace(" active", "");
  }
  box_large[large_index-1].style.display = "flex";
  menu_large[large_index-1].className += " active";
}

var hogwarts_index = 1;
Box_Hogwarts(hogwarts_index);

function Menu_Hogwarts(hogwarts) {
  Box_Hogwarts(hogwarts_index = hogwarts);
}

function Box_Hogwarts(hogwarts) {
  var a;
  var box_hogwarts = document.getElementsByClassName("model__hogwarts");
  var menu_hogwarts = document.getElementsByClassName("model__menu--hogwarts");
  if (hogwarts > box_hogwarts.length) {hogwarts_index = 1}
  if (hogwarts < 1) {hogwarts_index = box_hogwarts.length}
  for (a = 0; a < box_hogwarts.length; a++) {
      box_hogwarts[a].style.display = "none";
  }
  for (a = 0; a < menu_hogwarts.length; a++) {
      menu_hogwarts[a].className = menu_hogwarts[a].className.replace(" active", "");
  }
  box_hogwarts[hogwarts_index-1].style.display = "flex";
  menu_hogwarts[hogwarts_index-1].className += " active";
}

var qbb_index = 1;
Box_QBB(qbb_index);

function Menu_QBB(qbb) {
  Box_QBB(qbb_index = qbb);
}

function Box_QBB(qbb) {
  var b;
  var box_qbb = document.getElementsByClassName("webdesign__qbb");
  var menu_qbb = document.getElementsByClassName("webdesign__menu--qbb");
  if (qbb > box_qbb.length) {qbb_index = 1}
  if (qbb < 1) {qbb_index = box_qbb.length}
  for (b = 0; b < box_qbb.length; b++) {
      box_qbb[b].style.display = "none";
  }
  for (b = 0; b < menu_qbb.length; b++) {
      menu_qbb[b].className = menu_qbb[b].className.replace(" active", "");
  }
  box_qbb[qbb_index-1].style.display = "flex";
  menu_qbb[qbb_index-1].className += " active";
}