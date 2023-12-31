const { Review, User } = require('../db')
const { Op } = require('sequelize');
require("dotenv").config();

// Trae todas las Reviews
const getReviewsController = async () => {
    const reviews = await Review.findAll();

    if (reviews.length === 0) {
        throw Error('no reviews yet');
    }

    return reviews;
    // const arrayReviews = reviews.map(review => {
    //     return {
    //         id: review.id,
    //         rating: review.rating,
    //         comment: review.comment,
    //         clientId: review.clientId,
    //         walkerId: review.walkerId
    //     }
    // });

    // return arrayReviews;
}

// trae reviews por id de paseador
const getReviewsByWalkerIdController = async (walkerId) => {
    const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
   
    if (!walkerId) {
        throw new Error('Ingrese un ID');
    }

    if (!regexExp.test(walkerId)) {
        throw Error('Ingrese un ID valido');
    }

    const walker = await User.findOne({ where: { id: walkerId } });
    const walkerReviews = await Review.findAll({
    where: { walkerId: walkerId }
    });

    if (!walker) {
        throw Error('El paseador no existe');
    }

    if (walkerReviews.length === 0) {
        throw Error('El paseador no tiene reviews');
    }

    return walkerReviews;
}


// trae reviews por id de cliente
const getReviewsByClientIdController = async (clientId) => {
    const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
   
    if (!clientId) {
        throw new Error('Ingrese un ID');
    }

    if (!regexExp.test(clientId)) {
        throw Error('Ingrese un ID valido');
    }

    const client = await User.findOne({ where: { id: clientId } });
    const clientReviews = await Review.findAll({
    where: { clientId: clientId }
    });

    if (!client) {
        throw Error('El cliente no existe');
    }

    if (clientReviews.length === 0) {
        throw Error('Este cliente no tiene reviews');
    }

    return clientReviews;
}


//Crea una nueva Review en la BD
const createReviewController = async ( walkerId, clientId, rating, comment ) => {
   
    const walker = await User.findOne({ where: { id: walkerId } });
    const client = await User.findOne({ where: { id: clientId } });
    
    if (!rating) {
        throw Error('No has calificado!')
    }

    // const searchReview = await Review.findAll({
    //     where: { clientId: clientId, walkerId: walkerId }
    // });

    // if (searchReview.length !== 0) throw Error('Ya has reseñado a este usuario!');

    let newReview = await Review.create({
        clientName: client.name,
        clientImage: client.image,
        rating: rating,
        comment: comment,
        clientId: clientId,
        walkerId: walkerId,
    });

// actualizamos el promedio de rating del paseador
    const walkerReviews = await Review.findAll({
        where: { walkerId: walkerId }
    })

    const ratingArray = [];

    walkerReviews.map(review => { ratingArray.push(review.rating) });

    const ratingSum = ratingArray.reduce((a, b) => a + b, 0);

    const ratingAvg = ratingSum / ratingArray.length;
    
    await walker.update({ ratingAvg: ratingAvg });

    return newReview;
}


module.exports = {
    getReviewsController,
    getReviewsByWalkerIdController,
    getReviewsByClientIdController,
    createReviewController
}
