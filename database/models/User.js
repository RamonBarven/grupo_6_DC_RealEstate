module.exports = (sequelize,dataTypes) => {
    let alias = 'Users';
    let cols = {
        user_id:{
            type: dataTypes.INTEGER,
            primaryKey:true, 
            autoIncrement:true,
            allowNull:false
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
            type: dataTypes.STRING(200),
        },
        photo:{
            type: dataTypes.STRING(100),
        },
        type_id:{
            type: dataTypes.INTEGER,
        }
    }
    let config = {
        tableName: 'users',
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.belongsTo(models.UserTypes,{
            as: 'UserTypes',
            foreignKey: 'type_id'
        })
        
        User.hasMany(models.Favorites,{
            as: 'Favorites',
            foreignKey: 'user_id'
            })
    }
    return User;
}