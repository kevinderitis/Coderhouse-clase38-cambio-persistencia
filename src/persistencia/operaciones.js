import ContenedorMemoria from './contenedores/ContenedorMemoria.js'
import ContenedorArchivo from './contenedores/ContenedorArchivo.js'
import ContenedorDb from './contenedores/ContenedorDb.js'
import 'dotenv/config'

const modo = process.env.CONT ? process.env.CONT : '';
let contenedor

switch (modo) {
    case 'fs':
        contenedor = new ContenedorArchivo('./db.json')
        break
    case 'db': 
        contenedor = new ContenedorDb()
    default:
        contenedor = new ContenedorMemoria()
}

async function guardar(obj) {
    return await contenedor.guardar(obj)
}

async function listar() {
    return await contenedor.listarAll()
}

export {
    guardar,
    listar
}
