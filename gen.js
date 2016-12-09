let container = document.getElementById('container');

let projects = [
  'lesson1',
  'lesson3',
  'lesson4',
  'lesson8',
  'lesson9'
];

let text = [
  'Lesson 1',
  'Lesson 3',
  'Lesson 4',
  'Lesson 8',
  'Lesson 9',
];

for(i=1; i!=5; i++) {
  projects.push('exercise' + i);
  text.push('Exercise ' + i);
}

projects.push('final');
text.push('Final');

window.onload = function() {
  for(i=0; i!=projects.length; i++) {
    container.innerHTML += '<a href="./' + projects[i] + '/index.html"><div class="button" id="' + projects[i] + '">' + text[i] + '</div></a>'
  }

  let l1 = document.getElementById('lesson1');
  let l3 = document.getElementById('lesson3');
  let l4 = document.getElementById('lesson4');
  let l8 = document.getElementById('lesson8');
  let l9 = document.getElementById('lesson9');
  let e1 = document.getElementById('exercise1');
  let e2 = document.getElementById('exercise2');
  let e3 = document.getElementById('exercise3');
  let e4 = document.getElementById('exercise4');
  let fn = document.getElementById('final');

  let buttons = [l1, l3, l4, l8, l9, e1, e2, e3, e4, fn];

  for(i=0; i!=buttons.length; i++) {
    buttons[i].style.background = 'url("./img/' + projects[i] + '.png")';
  }
}
