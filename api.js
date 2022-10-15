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
