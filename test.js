const api = require('./api');
global.fetch = require('jest-fetch-mock');
beforeEach(() => { fetch.resetMocks() })

test('it makes a fetch call to unsplash', async () => {
        await api.fetchPhoto('wedding')
        expect(fetch).toHaveBeenCalled()
    })
    
    
// test('Test to see what was passed to a fetch call', async () => {
//         await api.fetchPhoto('wedding')
//         expect(fetch).toHaveBeenCalledWith('https://api.unsplash.com/photos/random?query=wedding&per_page=1&client_id=gKEeCzK-8XXRBG8IHbYAGTEUDMN-Dpm9FjxjDS4f2Y0')
//     })



