const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('projects', {
        title:{
            type:DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description:{
            type:DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        github_back_url:{
            type:DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        github_front_url:{
            type:DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        trello_url:{
            type:DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        notion_url:{
            type:DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        ID_User_Lider:{
            type:DataTypes.INTEGER,
            allowNull: false,
            unique: true
        }
    })}