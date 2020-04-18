import TokenService from './token-service';
import config from '../config';

const BeersApiService = {
    getBeers(user_id) {
        return fetch(`${config.API_BASE_URL}/beers`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
                'user_id': user_id
            }
        })
            .then(res => 
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            );
    },
    postBeer(user_id, beer_name, brewery, type, ABV, rating) {
        return fetch(`${config.API_BASE_URL}/beers`, {
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
                'user_id': user_id
            },
            body: JSON.stringify({
                user_id,
                beer_name,
                brewery,
                type,
                ABV,
                rating
            })
        })
            .then(res => 
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            );
    },
};

export default BeersApiService;