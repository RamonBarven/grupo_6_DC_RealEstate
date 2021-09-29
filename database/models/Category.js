module.exports = (sequelize,dataTypes) => {
    let alias = 'Categories';
    let cols = {
        category_id:{
            type: dataTypes.INTEGER,
            primaryKey:true, 
            autoIncrement:true
        },
        status:{
            type: dataTypes.STRING(4),
        }
    }
    let config = {
        tableName:'categories',
        timestamps: false
    }
    const Category = sequelize.define(alias, cols, config);

    Category.associate = function(models) {
        Category.hasMany(models.Products,{
            as: 'Products',
            foreignKey: 'category_id'
        })
    }

    return Category;
}