import React, { Component } from "react";
import { connect } from "react-redux";

class PaymentPage extends Component {
  renderPaymentList = () => {
    return this.props.payments.map((payment) => (
      <div>
        {payment.name} - {payment.total}
      </div>
    ));
  };
  render() {
    return <div>{this.renderPaymentList()}</div>;
  }
}

const mapStateToProps = ({ payments: { payments } }) => ({
  payments
});

export default connect(mapStateToProps)(PaymentPage);
