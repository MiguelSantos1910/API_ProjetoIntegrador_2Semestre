const express = require('express');
const app = express();
const porta = 3000;
let dados_produtos = [];
app.use(express.json());
app.get('/', (req, res) =>{
    res.send('Planta Smart 4.0');
});
app.get('/produtos', (req, res) => {
    const {nome, quantidade, valor} = req.body;
    res.send(`Nome do produto: ${nome}, QTD: ${quantidade}, Preço: ${valor}`);
    if(!nome || !quantidade || !valor){
        return res.status(400).json({error: 'Informe o nome, quantidade e valor do produto.'});
    };
    const novos_dados = {nome, quantidade, valor};
    dados_produtos.push(novos_dados);
    res.status(201).json({message: 'Os dados foram salvos com sucesso!', dados_produtos:novos_dados});
});
app.get('/data', (req, res) => {
    res.json(dados_produtos);
});
app.listen(porta, () => {
    console.log('Servidor iniciado com sucesso!');
});