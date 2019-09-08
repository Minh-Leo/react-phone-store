import React, {Component} from "react";
import {storeProducts, detailProduct} from "./data";

const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  // to fix the problem of reference object, when assign products to storeProducts as above, the object value is not duplicated but its value in data.js => will change the source. this method copy value to new object, not reference them anymore
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState({products: tempProducts});
  };
  // end of solution

  // Store method
  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState({detailProduct: product});
  };
  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      {
        products: tempProducts,
        cart: [...this.state.cart, product]
      },
      () => {
        console.log(this.state);
      }
    );
  };

  // Modal method
  openModal = id => {
    const product = this.getItem(id);
    this.setState({
      modalProduct: product,
      modalOpen: true
    });
  };
  closeModal = () => {
    this.setState({
      modalOpen: false
    });
  };

  // Cart Method
  increment = id => {
    console.log("increment");
  };
  decrement = id => {
    console.log("decrement");
  };
  removeItem = id => {
    const cart = this.state.cart.filter(item => item.id !== id);
    this.setState({cart});
    console.log("removed");
  };
  clearCart = () => {
    console.log("clear");
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
