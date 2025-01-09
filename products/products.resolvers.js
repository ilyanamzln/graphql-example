const {
  getAllProducts,
  getProductsByPrice,
  getProductById,
} = require("./products.model");

module.exports = {
  Query: {
    products: () => getAllProducts(),
    productById: (_, args) => getProductById(args.id),
    productsByPrice: (_, args) => getProductsByPrice(args.min, args.max),
  },
};
