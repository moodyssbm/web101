let mainCont = document.getElementById('mainCont');
let head = document.getElementById('head');

let long = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ';

let short = 'Lorem ipsum dolor sit amet. ';

let single = ['Lorem', 'Ipsum', 'Dolor', 'Dit', 'Amet'];

function lorem(x, tag, len) {
  let result = '';
  result += '<';
  result += tag;
  result += '>'

  if(len == 'short') {
    for(i=0; i!=x; i++) {
      result += short;
    }
  } else {
    for(i=0; i!=x; i++) {
      result += long;
    }
  }
  result += '</';
  result += tag;
  result += '>';
  return result;
}

window.onload = function() {
  mainCont.innerHTML += lorem(5, 'p');
  mainCont.innerHTML += lorem(2, 'p');
  mainCont.innerHTML += lorem(3, 'p');
}

// god bless js for dummy text generation
