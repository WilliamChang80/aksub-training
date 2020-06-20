import React, { Component } from "react";

import axios from "Api/Mock/product-mock";
import Card from "Components/Card/Card";
import productList from "Datas/ProductList";
import SearchBar from "Components/Search/SearchBar";
import Cart from "Components/Cart/Cart";
import Spinner from "Components/Spinner/Spinner";

class ProductPage extends Component {
  state = {
    products: [],
    cart: []
  };

  componentDidMount() {
    axios
      .get("/products")
      .then((res) => res.data.data)
      .then((data) => this.setState({ products: data }))
      .catch((e) => console.log(e));
  }

  searchProduct = (value) => {
    const filteredProducts = productList.filter((product) => {
      const productName = product.name.toLowerCase();
      return productName.indexOf(value.toLowerCase()) !== -1;
    });
    this.setState({ products: filteredProducts });
  };

  addToCart = (data) => {
    this.setState({ cart: [...this.state.cart, data] });
  };

  renderCards = () => {
    return this.state.products.map((product) => (
      <Card
        name={product.name}
        price={product.price}
        stock={product.stock}
        key={product.id}
        addToCart={this.addToCart}
      />
    ));
  };

  addProduct = () => {
    axios
      .post("/product", { name: "Jaket", id: 2 })
      .then((res) => res.data)
      .then((data) =>
        this.setState({ products: [...this.state.products, data] })
      )
      .catch((e) => console.log(e));
  };

  render() {
    return (
      <div>
        <button onClick={() => this.addProduct()}>Add Product</button>
        <div className="card-container">
          <SearchBar searchProduct={this.searchProduct} />
          <Cart datas={this.state.cart} />
          {this.state.products.length === 0 ? <Spinner /> : this.renderCards()}
        </div>
      </div>
    );
  }
}

export default ProductPage;
