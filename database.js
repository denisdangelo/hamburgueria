/**
 * Modulo de conexão com banco de dados
 * Uso do framework mongoose
 */

//importação do mongoose
const mongoose = require('mongose')

//Configuração do banco de dados

const url = 'mongodb+srv://denisagotec:u5RHATzaMdgIVhP5@cluster0.qfhlm.mongodb.net/dblanches'

//validação (evitar a abertura de várias conexões)
let conectado = false

//Metodo (função) para conectar ao banco
const conectar = async () => {
    //se não estiver conectado
    if(!conectado){
        //conectar com o banco de dados
        try {
            await mongoose.connect(url)
            conectado = true //setar a variavel em true
            console.log('MongoDB conectado')
        } catch (error) {
            console.log(error)
        }
    }
}

//Metodo (função) para desconectar ao banco
const desconectar = async () => {
    //se estiver conectado
if(conectado){
        //desconectar com o banco de dados
    try {
        await mongoose.disconnect(url)
        conectado = false //setar a variavel em false
        console.log('MongoDB desconectado')
    } catch (error) {
        console.log(error)
        }
}
}

module.exports = {conectar, desconectar}