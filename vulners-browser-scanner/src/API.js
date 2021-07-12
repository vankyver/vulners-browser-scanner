
export default class API {

    static API_URL = 'https://vulners.com';

    static doRequest = (request, cb) => {
        fetch(API.API_URL + request)
            .then(r => r.json())
            .then(cb)
    };

    static search = (query, cb) => API.doRequest('/api/v3/search?q=' + query, cb)

}

