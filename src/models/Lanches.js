/**
 * metodo de criação de modelos
 */

//1) importação das bibilotecas do mongoose
const { model , Schema } = require('mongoose')

//criação da estrutura de dados ("coleção") que será usada no banco

const lancheSchema = new Schema({
    nome: {
        type: String
    },
    descricao: {
        type: String
    },
    preco: {
        type: String
    },
    imagem: {
        type: String
    }
}, {versionKey: false})

module.exports = model('Lanches', lancheSchema)