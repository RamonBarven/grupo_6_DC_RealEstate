module.exports = (sequelize,dataTypes) => {
    let alias = 'Products';
    let cols = {
        product_id:{
            type: dataTypes.INTEGER,
            primaryKey:true, 
            autoIncrement:true,
            allowNull:false
        },
        image:{
            type: dataTypes.STRING(100),
        },
        category_id:{
            type: dataTypes.INTEGER,
        },
        price:{
            type: dataTypes.INTEGER(100),
        },
        description:{
            type: dataTypes.TEXT,
        },
        location:{
            type: dataTypes.STRING(200),
        },
        sqft:{
            type: dataTypes.DECIMAL(6,1),
        },
        floors:{
            type: dataTypes.INTEGER,
        },
        beds:{
            type: dataTypes.INTEGER,
        },
        baths:{
            type: dataTypes.DECIMAL(2,1),
        }
    }
    let config = {
        tableName: 'products',
        timestamps: false
    }
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.Categories,{
            as: 'Categories',
            foreignKey: 'category_id'
        })

        Product.hasMany(models.Favorites,{
            as: 'Favorites',
            foreignKey: 'product_id'
        })
    }

    return Product;
}