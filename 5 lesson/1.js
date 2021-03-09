'use strict';

var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
var chessmenBlack = ['♜', '♞', '♝',	'♛', '♚', '♝', '♞', '♜'];
var chessPawnBlack = '♟';
var chessmenWhite = ['♖', '♘', '♗',	'♕', '♔', '♗', '♘', '♖'];
var chessPawnWhite = '♙';

var table = document.createElement('table');
document.body.appendChild(table);

for (let i = 0; i < 9; i++) {
  var tr = document.createElement('tr');
  for (let j = 0; j < 9; j++) {
    var td = document.createElement('td');
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
document.body.appendChild(table);


for (let i = 1; i < 9; i++) {
  for (let j = 1; j < 9; j++) {
    if ((i + j) % 2 == 0) {
      table.rows[i].cells[j].style.backgroundColor = 'gray';
    }
  }
}

for (let i = 0; i < 9; i++) {
  if (i == 0) {
    for (let j = 1; j < 9; j++) {
      table.rows[i].cells[j].innerHTML = letters[j - 1];
    }
  }
  if (i == 1) {
    for (let j = 1; j < 9; j++) {
      table.rows[i].cells[j].innerHTML = chessmenWhite[j - 1];
    }
  }
  if (i == 8 ) {
    for (let j = 1; j < 9; j++) {
      table.rows[i].cells[j].innerHTML = chessmenBlack[j - 1];
    }
  }
  if (i == 2) {
    for (let j = 1; j < 9; j++) {
      table.rows[i].cells[j].innerHTML = chessPawnWhite;
    }
  }
  if (i == 7) {
    for (let j = 1; j < 9; j++) {
      table.rows[i].cells[j].innerHTML = chessPawnBlack;
    }
  }
}

for (let i = 1; i < 9; i++) {
  table.rows[i].cells[0].innerHTML = i;
}
