import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

mock.onGet("/products").reply(200, {
  data: [
    {
      id: 4,
      createdAt: "2020-06-11T16:38:17.310+00:00",
      updatedAt: "2020-06-11T16:44:01.004+00:00",
      name: "Nintendo Switch",
      stock: 10,
      price: 1000000,
      productTypes: [
        {
          id: 5,
          createdAt: null,
          updatedAt: "2020-06-11T16:49:56.458+00:00",
          name: "Games",
          description: "This is Games"
        }
      ]
    },
    {
      id: 6,
      createdAt: "2020-06-11T16:38:17.310+00:00",
      updatedAt: "2020-06-11T16:44:02.421+00:00",
      name: "Nintendo Switch",
      stock: 10,
      price: 1000000,
      productTypes: [
        {
          id: 7,
          createdAt: "2020-06-11T16:44:02.418+00:00",
          updatedAt: "2020-06-11T16:44:02.418+00:00",
          name: null,
          description: null
        }
      ]
    },
    {
      id: 8,
      createdAt: "2020-06-11T16:38:17.310+00:00",
      updatedAt: "2020-06-11T16:44:25.634+00:00",
      name: "Jacket",
      stock: 4,
      price: 500000,
      productTypes: [
        {
          id: 1,
          createdAt: null,
          updatedAt: "2020-06-11T16:48:40.616+00:00",
          name: "Electronic",
          description: "This Is Electronic"
        }
      ]
    },
    {
      id: 9,
      createdAt: "2020-06-11T16:38:17.310+00:00",
      updatedAt: "2020-06-11T16:44:26.835+00:00",
      name: "Jacket",
      stock: 4,
      price: 500000,
      productTypes: [
        {
          id: 1,
          createdAt: null,
          updatedAt: "2020-06-11T16:48:40.616+00:00",
          name: "Electronic",
          description: "This Is Electronic"
        }
      ]
    },
    {
      id: 10,
      createdAt: "2020-06-11T16:38:17.310+00:00",
      updatedAt: "2020-06-11T16:48:40.615+00:00",
      name: "T-Shirt",
      stock: 4,
      price: 500000,
      productTypes: [
        {
          id: 12,
          createdAt: "2020-06-11T16:48:40.613+00:00",
          updatedAt: "2020-06-11T16:48:40.613+00:00",
          name: "Clothes",
          description: "This Is Clothes"
        },
        {
          id: 1,
          createdAt: null,
          updatedAt: "2020-06-11T16:48:40.616+00:00",
          name: "Electronic",
          description: "This Is Electronic"
        }
      ]
    },
    {
      id: 13,
      createdAt: "2020-06-11T16:38:17.310+00:00",
      updatedAt: "2020-06-11T16:49:56.456+00:00",
      name: "Playstation 4 Pro",
      stock: 7,
      price: 4500000,
      productTypes: [
        {
          id: 5,
          createdAt: null,
          updatedAt: "2020-06-11T16:49:56.458+00:00",
          name: "Games",
          description: "This is Games"
        }
      ]
    }
  ]
});

mock.onPost("/product", { name: "Jaket", id: 2 }).reply(200, {
  id: 15,
  createdAt: "2020-06-11T16:38:17.310+00:00",
  updatedAt: "2020-06-11T16:49:56.456+00:00",
  name: "Playstation 4 Pro",
  stock: 7,
  price: 4500000,
  productTypes: [
    {
      id: 5,
      createdAt: null,
      updatedAt: "2020-06-11T16:49:56.458+00:00",
      name: "Games",
      description: "This is Games"
    }
  ]
});

export default axios;
