
function wakeDog(dogName, dogBreed) {
    let msg = `Wake ${dogName} the ${dogBreed}`;
    console.log(msg);
    return msg;
}

function leashDog(dogName, dogBreed) {
    let msg = `Leash ${dogName} the ${dogBreed}`;
    console.log(msg);
    return msg;
}

function walkToPark(dogName, dogBreed) {
    let msg = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(msg);
    return msg;
}

function throwFrisbee(dogName, dogBreed) {
    let msg = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(msg);
    return msg;
}

function walkHome(dogName, dogBreed) {
    let msg = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(msg);
    return msg;
}

function unleashDog(dogName, dogBreed) {
    let msg = `Unleash ${dogName} the ${dogBreed}`;
    console.log(msg);
    return msg;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    let successMessages=[];
    for (let i = 0; i < routine.length; i++) {
       successMessages.push(routine[i](dogName, dogBreed));
    }
return successMessages;
}