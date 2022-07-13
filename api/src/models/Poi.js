const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "poi",
    {
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len: [3,30],

        }
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
      
      },
      telefono: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate:{
           len: {
               args: [10,13],
               msg: "El numero de telefono tiene 10 digitos, hasta 13 contando el codigo de area"
          }   
        }
      },
      coordenadas: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull:false,
        validate: {
          is: /^((\-?|\+?)?\d+(\.\d+)?),\s*((\-?|\+?)?\d+(\.\d+)?)$/i,
          
        },
        primaryKey: true,
        unique:true
      },
      categoria: {
        type: DataTypes.ENUM({
          values: ['Comercial', 'Residencial','Mixto']
        }),
        allowNull:false
      },
    },
    { timestamps: false }
  );
};
