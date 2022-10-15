(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
async function fetchPhoto (event) {

    const url = 'https://api.unsplash.com/photos/random?query='+event+'&per_page=1&client_id=gKEeCzK-8XXRBG8IHbYAGTEUDMN-Dpm9FjxjDS4f2Y0';

    const response = await fetch(url)
    const data = await response.json();
    
    return data;
}

module.exports = { fetchPhoto };

// You can solve the "Unexpected end of JSON input" error in the following 3 ways:

// wrap your parsing logic in a try/catch block
// make sure to return a valid JSON response from your server
// remove the parsing logic from your code if you are expecting an empty server response

},{}],2:[function(require,module,exports){
const { fetchPhoto } = require('./api');
const form = document.querySelector('form');
const cardHolder = document.querySelector('.cardHolder');

// async function fetchPhoto (event) {

//     const url = 'https://api.unsplash.com/photos/random?query='+event+'&per_page=1&client_id=gKEeCzK-8XXRBG8IHbYAGTEUDMN-Dpm9FjxjDS4f2Y0';

//     const response = await fetch(url)
//     const data = await response.json(); 

//     return data;
// }


form.addEventListener("submit", async e => {
    e.preventDefault();

    const greeting = `Dear ${e.target.greeting.value}`;
    const event = e.target.event.value;
    const message = e.target.message.value;

    const eventImg = await fetchPhoto(event);
    console.log(eventImg)

    const card = document.createElement('div')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3= document.createElement('p')
    const img= document.createElement('img')

    p1.textContent = greeting;
    p2.textContent = event;
    p3.textContent = message;
    img.src =eventImg.urls.small;

    cardHolder
    card.classList.add('card');

    cardHolder.append(card);
    card.append(p1);
    card.append(p3);
    card.append(img);

    console.log(greeting);
    console.log(event);
    console.log(message);

})

let exportString = 'asdf'





    
},{"./api":1}]},{},[2]);
