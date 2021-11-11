// Exercise 1 : Change The Article

let header = document.getElementsByTagName('h1');
console.log(header[0]);


let p = document.getElementsByTagName('p')
// p[p.length - 1].remove();

// document.removeChild(p[p.length - 1]);

let bg = document.querySelector('h2');
bg.addEventListener('click',function(){bg.style.backgroundColor='red'})


let invis = document.querySelector('h3');
invis.addEventListener('click',function(e){invis.style.display = 'none'})

function fatMode(){
  let bold = getElementsByTagName('p')

  for ( let p of bold){
    p.style.fontWeight = 'bold'
}
// fatMode('p')
