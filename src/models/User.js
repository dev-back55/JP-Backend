const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "The email must be a valid email"
          }
        }
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 255],
            msg: "The password must have at least 6 characters"
          }
        }
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: {
            msg: "The name can only contain letters"
          },
          len: {
            args: [2, 255],
            msg: "The name must be at least two characters"
          }
        }
      },
      whatsapp: {
        type: DataTypes.STRING,
        validate: {
            len: {
              args: [2, 55],
              msg: "The number must be at least two characters"
            }
          }
      },
      linkedin: {
        type: DataTypes.STRING,
        validate: {
            len: {
              args: [2, 55],
              msg: "The number must be at least two characters"
            }
          }
      },
      github: {
        type: DataTypes.STRING,
        validate: {
            len: {
              args: [2, 55],
              msg: "The number must be at least two characters"
            }
          }
      },
    });
};