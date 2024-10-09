
// Configuração de conexão com o banco de dados
const { Sequelize } =  require('sequelize')

const sequelize = new Sequelize ('aulabd-curso', 'Vinicius Padilha', 'admin123',{
    host: 'aulabd-curso.cj46cgswgbca.us-east-1.rds.amazonaws.com', 
    dialect: 'postgres'
})


module.exports = sequelize
