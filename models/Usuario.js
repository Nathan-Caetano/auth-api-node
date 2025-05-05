const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig")

const Usuario = sequelize.define('Usuario', {
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    senha:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Usuario;