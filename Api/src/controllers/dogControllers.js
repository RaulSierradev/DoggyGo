const { Dog } = require("../db")

const createDog = async (name, race, image, age, recomendations) => {
    const dog = await Dog.create({
        name,
        race,
        image,
        image,
        age,
        recomendations
    })
    return dog
}


module.exports = {
    createDog,
    getDogs
}