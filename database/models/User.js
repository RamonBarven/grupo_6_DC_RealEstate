module.exports = (sequelize,dataTypes) => {
    let alias = 'Users';
    let cols = {
        user_id:{
            type: dataTypes.INTEGER,
            primaryKey:true, 
            autoIncrement:true
        },
        name:{
            type: dataTypes.STRING(50),
        },
        lastName:{
            type: dataTypes.STRING(50),
        },
        email:{
            type: dataTypes.STRING(50),
        },
        password:{
            type: dataTypes.STRING(50),
        },
        photo:{
            type: dataTypes.STRING(100),
        }
    }
    let config = {
        tableName= 'users',
        timestamps= false
    }
    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.belongsTo(models.UserTypes,{
            as: 'UserTypes',
            foreignKey: 'type_id'
        })
        User.belongsToMany(models.Products, {
            as: 'products',
            through: 'favorites',
            foreignKey: 'user_id',
            otherKey: 'product_id',
            timestamps: false
        })
    }
    return User;
}