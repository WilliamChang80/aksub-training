import React, { Component } from "react";
import axios from "axios";

import Card from "../Components/Card/Card";
import productList from "../Datas/ProductList";
import SearchBar from "../Components/Search/SearchBar";
import Cart from "../Components/Cart/Cart";
import { routeList } from "../Routes/Route";
import Spinner from "../Components/Spinner/Spinner";

class ProductPage extends Component {
  state = {
    products: [],
    cart: []
  };

  componentDidMount() {
    setTimeout(() => {
      axios
        .get(routeList.getAllProducts)
        .then((res) => res.data.data)
        .then((data) => this.setState({ products: data }))
        .catch((e) => console.log(e));
    }, 2000);
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

  render() {
    return (
      <div>
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
