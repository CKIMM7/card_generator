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
    p1.setAttribute("id", "reciever");
    p3.setAttribute("id", "messag");

    cardHolder.append(card);
    card.append(p1);
    card.append(p3);
    card.append(img);

    console.log(greeting);
    console.log(event);
    console.log(message);

})

let exportString = 'asdf'





    