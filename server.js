const express = require("express");
const { createSchema, createYoga } = require("graphql-yoga");

const typeDefinitions = /* GraphQL */ `
  type Query {
    products: [Product]
    orders: [Order]
  }

  type Product {
    id: ID!
    description: String!
    price: Float!
    reviews: [Review]
  }

  type Review {
    rating: Int!
    comment: String
  }

  type Order {
    date: String!
    subtotal: Float!
    items: [OrderItem]
  }

  type OrderItem {
    product: Product!
    quantity: Int!
  }
`;

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
  ],
  orders = [
    {
      date: "2005-05-05",
      subtotal: 90.22,
      items: [
        {
          product: {
            id: "redshoe",
            description: "Old Red Shoe",
            price: 45.11,
          },
          quantity: 2,
        },
      ],
    },
  ];

const schema = createSchema({
  typeDefs: typeDefinitions,
  resolvers: {
    Query: {
      products: () => products,
      orders: () => orders,
    },
  },
});

const yoga = createYoga({
  schema,
});

const app = express();

app.use("/graphql", yoga);

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
