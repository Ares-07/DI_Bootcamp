function setTime_out(){
  setTimeout(function(){
    console.log('it is raining and I do not like it');
  },3000);
}
let id;
function setInter_val(){
  id = setInterval(function(){
    console.log('hello');
  },2000)
}

function clearInter_val(){
  clearInterval(id)
}

function move() {
  let pos = 0;
  let pos2 = 150;
  let elem = document.getElementById('inner');
  let id = setInterval(function(){
      if(pos === 350){
      let x = clearInterval(id)
      }
      else {
        elem.style.left = pos + 'px';
        // elem.style.top = pos2 + 'px';

        pos++;
        elem.style.top = pos2 + 'px';
      }

  },5)
}
