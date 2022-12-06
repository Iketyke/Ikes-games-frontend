import axios from 'axios';

const gamesAPI = axios.create({
    baseURL: "https://ikes-games.cyclic.app/api"
});

export const getReviews = () => {
    return gamesAPI
        .get('/reviews')
        .then(res => {
            return res.data;
        }).catch(err => {
            console.log(err);
        })
}