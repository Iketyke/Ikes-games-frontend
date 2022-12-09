import axios from 'axios';

const gamesAPI = axios.create({
    baseURL: "https://ikes-games.cyclic.app/api"
});

export const getReviews = (category, sort_by, order) => {
    let path = '/reviews?'
    if (category) {
        path+= `category=${category}&` 
    }
    if (sort_by) {
        path += `sort_by=${sort_by}&`
    }
    if (order) {
        path += `order=${order}`
    }
    return gamesAPI
        .get(path)
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

export const incVote = (review_id, inc) => {
    return gamesAPI
    .patch(`/reviews/${review_id}`, {inc_votes: inc})
    .then(res => {
        return res.data
    }).catch(err => {
        console.log(err)
    })
}

export const postComment = (review_id, user, commentBody) => {
    return gamesAPI
    .post(`/reviews/${review_id}/comments`, {username: user, body: commentBody})
    .then(res => {
        return res.data
    }).catch(err => {
        console.log(err);
    })
}

export const getCategories = () => {
    return gamesAPI
    .get('/categories')
    .then(res => {
        return res.data
    }).catch(err => {
        console.log(err);
    })
}