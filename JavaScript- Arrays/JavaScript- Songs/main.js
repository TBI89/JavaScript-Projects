// Songs

// Array with three items (song names):

const songs = ["Californiacation", "Numb" ,"Song2"];

// Print of the array:

document.write(`The first song is: ${songs[0]}<br>`);
document.write(`The second song is: ${songs[1]}<br>`);
document.write(`The third song is: ${songs[2]}<br>`);

document.write("<hr>");

// Delate the second item:

songs.splice(1, 1);

// Print again: 

document.write(`All the songs: ${songs}`);

