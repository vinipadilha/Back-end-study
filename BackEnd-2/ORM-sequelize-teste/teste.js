

const { Sequelize } =  require('sequelize')

const sequelize = new Sequelize ('nome do banco', 'nome user', 'senha',{
    host: 'endpoint', 
    dialect: 'postgres'
})


module.exports = sequelize

