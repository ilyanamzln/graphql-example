const {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addProductReview,
} = require("./products.model");

module.exports = {
  Query: {
    products: () => getAllProducts(),
    productById: (_, args) => getProductById(args.id),
    productsByPrice: (_, args) => getProductsByPrice(args.min, args.max),
  },
  Mutation: {
    addNewProduct: (_, args) =>
      addNewProduct(args.id, args.description, args.price),
    addProductReview: (_, args) =>
      addProductReview(args.id, args.rating, args.comment),
  },
};
