import React, {Component, Fragment} from "react";
import Product from "./Product";
import Title from "./Title";
import {ProductConsumer} from "../context";

export default class ProductList extends Component {
  render() {
    return (
      <Fragment>
        <div className='py-5'>
          <div className='container'>
            <Title name='our' title='products'></Title>
            <div className='row'>
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product product={product} key={product.id} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
