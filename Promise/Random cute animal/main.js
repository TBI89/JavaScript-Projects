// Generate a random animal from a hard coded array:
function generateCuteAnimalAfterDelay() {
    return new Promise((resolve, reject) => {//Return the value using a promise object

        // 1 Second delay before generating:
        setTimeout(() => {
            const animals = ["kitten", "puppy", "bunny", "parrot", "scorpion", "spider", "bug"]; //All animals
            const cuteAnimals = ["kitten", "puppy", "bunny", "parrot"]; //Cute animals

            try {
                const randomIndex = Math.floor(Math.random() * animals.length);
                const randomAnimal = animals[randomIndex];

                // Check if the animal is cute
                if (cuteAnimals.includes(randomAnimal)) {
                    resolve(randomAnimal);
                }
                else {
                    throw new Error(`The animal ${randomAnimal}, isn't cute!`);
                }
            }
            // If not, send an error + the animal name:
            catch (err) {
                reject(err);
            }
        }, 1000)
    })
}

// Display the animal via HTML onclick event:
function showAnimal() {
    const animalPromise = generateCuteAnimalAfterDelay();
    animalPromise
        .then(randomAnimal => document.write(randomAnimal))
        .catch(err => alert(err.message));
}