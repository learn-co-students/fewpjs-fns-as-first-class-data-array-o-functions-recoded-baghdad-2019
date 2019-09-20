function wakeDog(dogname, dogbreed) {
    let wakedogMsg = `Wake ${dogname} the ${dogbreed}`;
    console.log(wakedogMsg);
    return wakedogMsg;
}

function leashDog(dogname, dogbreed) {
    let leashDogMsg = `Leash ${dogname} the ${dogbreed}`;
    console.log(leashDogMsg);
    return leashDogMsg;
}

function walkToPark(dogname, dogbreed) {
    let walkToParkMsg = `Walk to the park with ${dogname} the ${dogbreed}`;
    console.log(walkToParkMsg);
    return walkToParkMsg;
}

function throwFrisbee(dogname, dogbreed) {
    let throwFrisbeeMsg = `Throw the frisbee for ${dogname} the ${dogbreed}`;
    console.log(throwFrisbeeMsg);
    return throwFrisbeeMsg;
}

function walkHome(dogname, dogbreed) {
    let walkHomeMsg = `Walk home with ${dogname} the ${dogbreed}`;
    console.log(walkHomeMsg);
    return walkHomeMsg;
}

function unleashDog(dogname, dogbreed) {
    let unleashDogMsg = `Unleash ${dogname} the ${dogbreed}`;
    console.log(unleashDogMsg);
    return unleashDogMsg;
}
let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogname, dogbreed) {
    let result = [];
    for (let i = 0; i < routine.length; i++) {
        result[i] = routine[i](dogname, dogbreed);
    }
    return result;
}
exerciseDog('Byron', 'poodle');