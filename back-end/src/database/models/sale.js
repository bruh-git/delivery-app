module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'sales',
    modelName: 'sales',
    underscored: true,
  });

  Sale.associate = (models) => {
    models.Sale.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    });

    models.Sale.belongsTo(models.User, {
      foreignKey: 'sellerId',
      as: 'saller'
    });

    models.Sale.hasMany(models.SaleProduct,
      { foreignKey: 'saleId', as: 'sale' },
      );
  }

  return Sale;
};