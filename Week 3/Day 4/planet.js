let solarSystem = [
  {name: 'Mercury', moon: 0, color:"orange"},
  {name: 'Venus', moon: 0, color:"grey"},
  {name: 'Earth', moon: 1, color:"blue"},
  {name: 'Mars', moon: 2, color: 'red'},
  {name: 'Jupiter', moon: 79, color: 'brown'},
  {name: 'Saturan', moon: 82, color: 'yellow'},
  {name: 'Uranus',moon: 27, color:'lightblue'},
  {name: 'Neptune', moon: 14, color:'darkblue'}
  ]

let main = document.getElementById('listPlanets');
for (var i = 0; i < solarSystem.length; i++) {
let planet = document.createElement('div');
  planet.classList.add('planet')
  planet.innerText =  solarSystem[i].name;
  planet.style.backgroundColor = solarSystem[i].color;
  main.appendChild(planet);

  let moons = solarSystem[i].moon;
  let left = 0
  for (var i = 0; i < moons; i++) {
    let moon document.createElement('div');
   moon.classList.add('moon');
   main.style.left = left + 'px';
   left += 10;
   plant.appendChild(moon);
 }




}
