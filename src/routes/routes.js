const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const clienteController = require('../controllers/clienteController')
const produtoController = require('../controllers/produtoController')

//cliente
router.post('/novoCliente', clienteController.novoCliente)

//produto
router.post('/novoProduto', produtoController.novoProduto)
router.get('/produtos', produtoController.listarProduto)
router.get('/produto/:id', produtoController.listarUmProduto)
router.put('/atualizar/produto/:id', produtoController.atualizarProduto)
router.delete('/deletar/produto/:id', produtoController.removerProduto)

module.exports = router
