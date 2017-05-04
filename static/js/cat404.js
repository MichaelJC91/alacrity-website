import $ from 'jquery';

// Cute animal picture array
let cuteAnimalArray = [
  'https://res.cloudinary.com/alacrity-web-development/image/upload/v1493790402/cool%20404%20page.jpg',
  'https://res.cloudinary.com/alacrity-web-development/image/upload/v1493790402/cool%20404%20page%202.jpg',
  'https://res.cloudinary.com/alacrity-web-development/image/upload/v1493790401/cool%20404%20page%2012.jpg',
  'https://res.cloudinary.com/alacrity-web-development/image/upload/v1493790401/cool%20404%20page%2011.jpg',
  'https://res.cloudinary.com/alacrity-web-development/image/upload/v1493790401/cool%20404%20page%209.jpg',
  'https://res.cloudinary.com/alacrity-web-development/image/upload/v1493790400/cool%20404%20page%208.jpg',
  'https://res.cloudinary.com/alacrity-web-development/image/upload/v1493790401/cool%20404%20page%2010.jpg',
  'https://res.cloudinary.com/alacrity-web-development/image/upload/v1493790400/cool%20404%20page%205.jpg',
  'https://res.cloudinary.com/alacrity-web-development/image/upload/v1493790400/cool%20404%20page%207.jpg',
  'https://res.cloudinary.com/alacrity-web-development/image/upload/v1493790400/cool%20404%20page%206.jpg',
  'https://res.cloudinary.com/alacrity-web-development/image/upload/v1493790400/cool%20404%20page%204.jpg',
  'https://res.cloudinary.com/alacrity-web-development/image/upload/v1493790400/cool%20404%20page%203.jpg'
]

//Random cute animal function
function getRandomCuteAnimal(array) {
  let randomAnimal = array[Math.floor(Math.random() * array.length)];
  console.log($('.cuteAnimal404').attr('src', randomAnimal));
}

//Get random cute animal
getRandomCuteAnimal(cuteAnimalArray);
