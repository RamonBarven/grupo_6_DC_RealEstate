module.exports = (sequelize,dataTypes) => {
    let alias = 'Favorites';
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true, 
            autoIncrement:true
        },
        user_id:{
            type: dataTypes.INTEGER
        },
        product_id:{
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: 'Favorites',
        timestamps: false
    }
    const Favorite = sequelize.define(alias, cols, config);

    Favorite.associate = function(models) {
        Favorite.belongsTo(models.Users,{
            as: 'Users',
            foreignKey: 'user_id'
        })
        Favorite.belongsTo(models.Products,{
            as: 'Products',
            foreignKey: 'product_id'
        })
    }

    return Favorite;
}