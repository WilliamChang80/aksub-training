import React, { Component, lazy, Suspense } from "react";

import Stock from "Components/Stock/Stock";
import Buyout from "Components/Buyout/Buyout";
import Spinner from "Components/Spinner/Spinner";

const Image = lazy(() => import("../Image/Image"));

class Card extends Component {
  state = {
    stock: 0
  };
  incrementStock = () => {
    this.state.stock < this.props.stock &&
      this.setState({ stock: this.state.stock + 1 });
  };

  decrementStock = () => {
    this.state.stock > 0 && this.setState({ stock: this.state.stock - 1 });
  };

  buyoutItems = () => {
    this.setState({ stock: this.props.stock });
  };

  submitProduct = () => {
    const data = {
      name: this.props.name,
      total: this.props.price * this.state.stock
    };
    this.props.addToCart(data);
  };
  render() {
    const { name, price } = this.props;
    return (
      <div className="card">
        <div className="card-title">{name}</div>
        <Suspense fallback={<Spinner />}>
          <Image
            source={`${process.env.PUBLIC_URL}/Assets/Images/product.jpg`}
            name="card-image"
          />
        </Suspense>
        <div className="card-price">{`Rp ${price}`}</div>
        <div className="card-button" onClick={() => this.submitProduct()}>
          Add To Cart
        </div>
        <Stock
          stock={this.state.stock}
          incrementStock={this.incrementStock}
          decrementStock={this.decrementStock}
        />
        <Buyout buyoutItems={this.buyoutItems} />
      </div>
    );
  }
}

export default Card;
