const mongoose = require('mongoose');

//usuario de conexion con la bd
const user ='suzowy';
const password = 'secretoboot1';
//nombre de la base de datos
const db = 'servidor-movies1';
//enlace de conexion que nos proporciona mongodb
const uri =`mongodb+srv://${user}:${password}@cluster0.yb1memq.mongodb.net/${db}?retryWrites=true&w=majority`;


const connect = async () => {
    try {
      // aqui nos conectamos con la BD
      const db = await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      const { name, host } = db.connection;
      console.log(`Base de datos : ${name} y host: ${host}`);
    } catch (error) {}
  };
  
  module.exports = {connect};