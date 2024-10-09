// CRIANDO MODELO PARA ENTIDADE USUARIO

const { DataTypes } = require('sequelize');
const sequelize = require ('../config/database')

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primarykey: true, 
        autoIncrement: True,

    }, 
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING 
})

module.exports = Usuario;





