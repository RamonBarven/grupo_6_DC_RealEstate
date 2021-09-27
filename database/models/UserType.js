module.exports = (sequelize,dataTypes) => {
    let alias = 'UserTypes';
    let cols = {
        type_id:{
            type: dataTypes.INTEGER,
            primaryKey:true, 
            autoIncrement:true
        },
        nameType:{
            type: dataTypes.STRING(6)
        }
    }
    let config = {
        tableName= 'UserTypes',
        timestamps= false
    }
    const UserType = sequelize.define(alias, cols, config);

    UserType.associate = function(models) {
        UserType.hasMany(models.Users,{
            as: 'Users',
            foreignKey: 'type_id'
        })
    }

    return UserType;
}