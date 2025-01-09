const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
  },
  {
    id: "bluejeans",
    description: "Blue Jeans",
    price: 55.55,
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

module.exports = {
  getAllProducts,
  getProductById,
  getProductsByPrice,
};
