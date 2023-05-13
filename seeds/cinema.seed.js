mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const Cinema = require("../api/models/cinema.model.js");


const arrayCinemas = [
    {
        name: 'Monumental',
        location: 'Almeria',
        movies: []
    },
    {
        name: 'Yelmo Cines',
        location: 'Roquetas de mar',
        movies: []
    },
    {
        name: 'Xanadu',
        location: 'Madrid',
        movies: []
    },
    {
        name: 'Golem',
        location: 'Pamplona',
        movies: []
    },
    {
        name: 'Cinesa Parquesur',
        location: 'Madrid',
        movies: []
    }
    ];

mongoose.connect(process.env.uri)
.then(async () => {
    const allCinemas = await Cinema.find();
    if(allCinemas.length > 0){
        await Cinema.collection.drop();
        console.log("cines borrados");
    }
})
.catch((error) => console.log("Error borrando cines"))
.then(async() => {
    const cinemasMap = arrayCinemas.map(cinema => new Cinema(cinema));
    await Cinema.insertMany(cinemasMap);
    console.log("Cines insertados");
})
.catch((error) => console.log(`Error insertando cines: $:{error}`))
.finally(() => mongoose.disconnect());
