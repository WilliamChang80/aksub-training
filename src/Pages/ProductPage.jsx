import React, { Component } from "react";
import { connect } from "react-redux";

import axios from "Api/Mock/product-mock";
import Card from "Components/Card/Card";
import productList from "Datas/ProductList";
import SearchBar from "Components/Search/SearchBar";
import Cart from "Components/Cart/Cart";
import Spinner from "Components/Spinner/Spinner";
import { addItems } from "Redux/Action/item-action";
import { buyItem } from "Redux/Action/payment-action";

class ProductPage extends Component {
  state = {
    cart: []
  };

  componentDidMount() {
    this.props.addItems();
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
    return this.props.items.map((product) => (
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

  buyItem = () => {
    this.props.buyItem(this.state.cart);
  };

  render() {
    return (
      <div>
        <button onClick={() => this.addProduct()}>Add Product</button>
        <div className="card-container">
          <SearchBar searchProduct={this.searchProduct} />
          <button onClick={() => this.buyItem()}>Buy Item</button>
          <Cart datas={this.state.cart} />
          {this.props.items.length === 0 ? <Spinner /> : this.renderCards()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ items: { items } }) => ({
  items
});

const mapDispatchToProps = (dispatch) => ({
  addItems: () => dispatch(addItems()),
  buyItem: (item) => dispatch(buyItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
