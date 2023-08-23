// const axios = require('axios')
// const { API_KEY } = process.env;


// const getCountriesController = async () => {

//     let response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
//     let genres = await response.data.results.map(genre => genre.name);

//     const count = await Genre.count();

//     if (count === 0) {
//         genres.forEach(element => {
//             Genre.create({ name: element }) 
//         })
//     }
//     return genres;
// }

// const getStatesController = async () => {

//     let response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
//     let genres = await response.data.results.map(genre => genre.name);

//     const count = await Genre.count();

//     if (count === 0) {
//         genres.forEach(element => {
//             Genre.create({ name: element }) 
//         })
//     }
//     return genres;
// }

// const getCitiesController = async () => {

//     let response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
//     let genres = await response.data.results.map(genre => genre.name);

//     const count = await Genre.count();

//     if (count === 0) {
//         genres.forEach(element => {
//             Genre.create({ name: element }) 
//         })
//     }
//     return genres;
// }

// module.exports = {
//     getCountriesController,
//     getStatesController,
//     getCitiesController,
// }