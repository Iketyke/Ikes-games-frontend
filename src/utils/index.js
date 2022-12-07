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

export const getReview = (review_id) => {
    return gamesAPI
        .get('/reviews/' + review_id)
        .then(res => {
            return res.data;
        }).catch(err => {
            console.log(err);
        })
}

export const getComments = (review_id) => {
    return gamesAPI
        .get(`/reviews/${review_id}/comments`)
        .then(res => {
            return res.data
        }).catch(err => {
            console.log(err);
        })
}

