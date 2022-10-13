import mongoose from 'mongoose';

const opCollection = 'operaciones';

const opSchema = new mongoose.Schema({
    nombre: {type: String, require: true, max: 100},
    apellido: {type: String, require: true, max: 100},
    email: {type: String, require: true, max: 100},
    usuario: {type: String, require: true, max: 100},
    password: {type: Number, require: true}
})

const operacionesModel = mongoose.model(opCollection, opSchema);

export default operacionesModel;
