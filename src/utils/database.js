import mongoose from "mongoose";

import dotenv from 'dotenv';
dotenv.config();

const MONGODB_STRING = process.env.MONGODB_STRING;

const database = async () => {
  try {
    if (!MONGODB_STRING) {
      throw new Error("Falta la variable de entorno MONGODB_STRING");
    }
    await mongoose.connect(MONGODB_STRING);
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectarse a MongoDB', error);
    process.exit(1);
  }
};

export default database;

/*

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongodb_connection = process.env.MONGODB_STRING;

mongoose.connect(mongodb_connection)
    .then(() => console.log("Conectado a la base de datos"))
    .catch((error) => console.log("No se pudo conectar a la base de datos", error));

    */