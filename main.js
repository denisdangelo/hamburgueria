/**
 * Processo principal 
 * Estudo do CRUD com MongoDB
 */

//importação do módulo de conexão (database.js- coloca o caminho do arquivo)
const { conectar, desconectar } = require('./database.js')

//importação do modelo de dados de lanches (precisa colocar o caminho completo do arquivo)

const lanchesModel = require("./src/models/Lanches.js")

const criarLanches = async (nomeLanche, descricaoLanche, precoLanche, imagemLanche) => {
    try{
        const novoLanche = new lanchesModel({
            nome: nomeLanche,
            descricao: descricaoLanche,
            preco: precoLanche,
            imagem: imagemLanche
    })

         //a linha abaixo salva os dados do cliente no banco
         await novonovoLanche.save()
         console.log("Lanche adicionado com sucesso.")
    } catch (error) {
        console.log(error)
    }
}

//execução da aplicação
const app = async () => {
    await conectar()
    await criarLanches("X-Burger", "Hambúrguer, queijo e molho especial", "12.90", "/img/xburger.jpg");
await criarLanches("X-Salada", "Hambúrguer, queijo, alface, tomate e maionese", "14.50", "/img/xsalada.jpg");
await criarLanches("X-Bacon", "Hambúrguer, queijo, bacon e molho especial", "16.90", "/img/xbacon.jpg");
await criarLanches("X-Tudo", "Hambúrguer, queijo, bacon, ovo, presunto, alface e tomate", "19.90", "/img/xtudo.jpg");
await criarLanches("X-Frango", "Frango grelhado, queijo, alface e maionese", "15.50", "/img/xfrango.jpg");
await criarLanches("X-Calabresa", "Hambúrguer, queijo, calabresa e molho especial", "17.00", "/img/xcalabresa.jpg");
await criarLanches("Hot Dog", "Pão, salsicha, batata palha e molho especial", "10.00", "/img/hotdog.jpg");
await criarLanches("Misto Quente", "Pão, presunto e queijo", "8.50", "/img/mistoquente.jpg");
await criarLanches("Veggie Burger", "Hambúrguer vegetariano, queijo, alface e molho especial", "14.90", "/img/veggieburger.jpg");
    await desconectar()
}

console.clear()
app()