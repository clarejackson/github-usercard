// const axios = require('axios');
import axios from 'axios';
/*

  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/clarejackson")
.then((response) => {
  // console.log(response);
  const info = response.data;
  const cardClass = document.querySelector('.cards');
  const maker = cardMaker(info);
  cardClass.appendChild(maker);
// console.log(cardClass);

})
// .catch((error) => {
//   return ('the data was not returned', error);
// })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "https://api.github.com/users/DanielleKoduru", 
  "https://api.github.com/users/barbaralois", 
  "https://api.github.com/users/somersgreg", 
  "https://api.github.com/users/ViridityMoon", 
  "https://api.github.com/users/cl-sol"
];

followersArray.forEach(follower => {
  axios.get(`${follower}`)
    .then (response => {
      // console.log(response);
      const card = cardMaker(response.data);
      const cardClass = document.querySelector('.cards');
      cardClass.appendChild(card);
    })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const cardMaker = (object) => {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const img = document.createElement('img');
  img.setAttribute('src', object.avatar_url);
  // cardDiv.appendChild(img);

  const infoDiv = document.createElement('div');
  infoDiv.classList.add('card-info');
  // cardDiv.appendChild(infoDiv);

  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = object.name;
  // infoDiv.appendChild(name)

  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = object.login;
  // infoDiv.appendChild(username);

  const location = document.createElement('p');
  location.textContent = `Location: ${object.location}`;
  // infoDiv.appendChild(location);

  const profile = document.createElement('p');
  profile.textContent = `Profile: ${object.url}`
  // infoDiv.appendChild(profile);

  const a = document.createElement('a');
  a.setAttribute('href', object.url);
  // profile.appendChild(a);

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${object.followers}`;
  // infoDiv.appendChild(followers);

  const following = document.createElement('p');
  following.textContent = `Following: ${object.following}`;
  // infoDiv.appendChild(following);

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${object.bio}`;
  // infoDiv.appendChild(bio);

  cardDiv.appendChild(img);
  cardDiv.appendChild(infoDiv);
  infoDiv.appendChild(name);
  infoDiv.appendChild(username);
  infoDiv.appendChild(location);
  infoDiv.appendChild(profile);
  profile.appendChild(a);
  infoDiv.appendChild(followers);
  infoDiv.appendChild(following);
  infoDiv.appendChild(bio);


  // console.log(cardDiv);
  return cardDiv;
}
// const cardClass = document.querySelector('div.cards');
// console.log(cardClass);
// cardClass.appendChild(cardMaker(info));


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
