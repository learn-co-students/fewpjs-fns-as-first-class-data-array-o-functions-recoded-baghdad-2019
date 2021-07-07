function wakeDog(dogname, dogbreed) { return `Wake ${dogname} the ${dogbreed}`; } 
function leashDog(dogname, dogbreed) { return `Leash ${dogname} the ${dogbreed}`; }
function walkToPark(dogname, dogbreed) { return `Walk to the park with ${dogname} the ${dogbreed}`; } 
function throwFrisbee(dogname, dogbreed) { return `Throw the frisbee for ${dogname} the ${dogbreed}`;} 
function walkHome(dogname, dogbreed) { return `Walk home with ${dogname} the ${dogbreed}`; } 
function unleashDog(dogname, dogbreed) { return `Unleash ${dogname} the ${dogbreed}`; } 
let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
function exerciseDog(dogname, dogbreed) {
  let final = []; 
  for (let i = 0; i < routine.length; i++) 
  { final[i] = routine[i](dogname, dogbreed); }
  return final; }