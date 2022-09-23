module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER
    }
  }, {
    tablename: 'salesProducts',
    timestamps: false,
  });
  
  SaleProduct.associate = (connection) => {
    connection.Sale.belongsToMany(connection.Product, {
      through: SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
      as: 'products'
    });

    connection.Product.belongsToMany(connection.Sale, {
      through: SaleProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
      as: 'sales'
    });
  }

  return SaleProduct
}