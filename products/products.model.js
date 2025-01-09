const { GraphQLError } = require("graphql");

const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
    reviews: [],
  },
  {
    id: "bluejeans",
    description: "Blue Jeans",
    price: 55.55,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductById(id) {
  return products.find((product) => product.id === id);
}

function getProductsByPrice(min, max) {
  return products.filter(
    (product) => product.price >= min && product.price <= max
  );
}

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  };

  products.push(newProduct);

  return newProduct;
}

function addProductReview(id, rating, comment) {
  const product = getProductById(id);

  if (!product)
    throw new GraphQLError("Product not found!", {
      extensions: { code: "BAD_REQUEST" },
    });

  const review = {
    rating,
    comment,
  };

  product.reviews.push(review);

  return product;
}

module.exports = {
  getAllProducts,
  getProductById,
  getProductsByPrice,
  addNewProduct,
  addProductReview,
};
