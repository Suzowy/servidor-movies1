const express = require('express');
const {connect} = require('./utils/db');
const router = express.Router();

// ejecuto express para crear un nuevo servidor
const server = express();
connect(); // conexion con la Bd
server.use(express.json());
const PORT = 3000;


server.listen(PORT, () => {
    console.log(`Url del servidor : http://localhost:${PORT}`);
});


