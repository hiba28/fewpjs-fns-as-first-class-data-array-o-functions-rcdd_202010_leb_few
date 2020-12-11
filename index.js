let wakeDog = (dogName, dogBreed) => {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`
}
let leashDog = (dogName, dogBreed) => {
  console.log(`Leash ${dogName} the ${dogBreed}`)
  return `Leash ${dogName} the ${dogBreed}`
}
walkToPark = (dogName, dogBreed) => {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`
}
throwFrisbee = (dogName, dogBreed) => {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`)
  return `Throw the frisbee for ${dogName} the ${dogBreed}`
}
walkHome = (dogName, dogBreed) => {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`
}
unleashDog = (dogName, dogBreed) => {
  console.log(`Unleash ${dogName} the ${dogBreed}`)
  return `Unleash ${dogName} the ${dogBreed}`
}
let routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]
function exerciseDog(dogName, dogBreed){
  let arr =[]
  for(i=0 ; i < routine.length ; i++){
    arr.push(routine[i](dogName, dogBreed))
  }
  return arr
}
