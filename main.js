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
         await novoLanche.save()
         console.log("Lanche adicionado com sucesso.")
    } catch (error) {
        console.log(error)
    }
}


// CRUD - Read - Função para listar todos os lanches cadastrados
const listarLanches = async () => {
    try {
        // A linha abaixo lista todos os lanches cadastrados por ordem alfabetica
        const lanches = await lanchesModel.find().sort(
            {
                nome: 1
            }
        )
        console.log(lanches)
    } catch (error) {
        console.log(error)
    }
}

// CRUD Update - Função para alterar os dados de um cliente
// ATENÇÃO Obrigatoriamente o update precisa ser feito
// com base no ID de cliente
const  atualizarLanches = async (id, nomeLanche, descricaoLanche, precoLanche, imagemLanche) => {
    try {
        const lanches = await lanchesModel.findByIdAndUpdate(
            id,
            {
                nome: nomeLanche,
                descricao: descricaoLanche,
                preco: precoLanche, 
                imagem: imagemLanche
            },
            {
                new: true,
                runValidators: true
            }
        )
        // validação (retorno do banco)
        if(!lanches){
            console.log("Cliente não encontrado.")
        }else{
            console.log("Dados do cliente alterados com sucesso.")
        }
    } catch (error) {
        console.log(error)
        
    }
}

// CRUD - Delete - Função para excluir um cliente
// ATENÇÃO !!! - obrigatoriamente a exclusão e feita peli ID
const deletarLanches = async (id) => {
    try {
        // A linha abaixo exclui o cliente do banco de dados
        const lanche = await lanchesModel.findByIdAndDelete(id)
        // validação
        if (!lanche) {
            console.log("Lanche não encontrado.")
        } else {
            console.log("Lanche Deletado.")            
        }
    } catch (error) {
        console.log(error)
    }
}

//execução da aplicação
const app = async () => {
    await conectar()
    
    // CRUD - Create
    //await criarLanches("X-Burger", "Hambúrguer, queijo e molho especial", "12.90", "/img/xburger.jpg");
    //await criarLanches("X-Salada", "Hambúrguer, queijo, alface,   tomate e maionese", "14.50", "/img/xsalada.jpg");
    //await criarLanches("X-Bacon", "Hambúrguer, queijo, bacon e    molho especial", "16.90", "/img/xbacon.jpg");
    //await criarLanches("X-Tudo", "Hambúrguer, queijo, bacon, ovo,     presunto, alface e tomate", "19.90", "/img/xtudo.jpg");
    //await criarLanches("X-Frango", "Frango grelhado, queijo, alface   e maionese", "15.50", "/img/xfrango.jpg");
    //await criarLanches("X-Calabresa", "Hambúrguer, queijo,    calabresa e molho especial", "17.00", "/img/xcalabresa.jpg");
    //await criarLanches("Hot Dog", "Pão, salsicha, batata palha e  molho especial", "10.00", "/img/hotdog.jpg");
    //await criarLanches("Misto Quente", "Pão, presunto e queijo", "8.  50", "/img/mistoquente.jpg");
    //await criarLanches("Veggie Burger", "Hambúrguer vegetariano, queijo, alface e molho especial", "14.90", "/img/veggieburger.jpg");
    
    // CRUD - Read (Exemplo 1 - Listar todos os clientes) 
    //   await listarLanches()
    
    // CRUD - Update
    //await atualizarLanches('67bf4bd4f12a3b1e16d38f25', 'Double X-Burger ', '2 Hambúrguers, queijo e molho especial', '14.90', '/img/2xburger.jpg')

    // CRUD - Delete
    await deletarLanches('67bf4bd5f12a3b1e16d38f2f')

    await desconectar()
}

console.clear()
app()