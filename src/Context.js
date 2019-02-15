import React from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends React.Component {
  state = {
  	products: storeProducts,
  	detailProduct
  }

  handleDetail = () => {
  	console.log('Hello from details')
  }

  addToCart = () => {
  	console.log('hello from add to cart');
  }

  render(){
    return(
      <ProductContext.Provider value={{
      	...this.state,
      	handleDetail: this.handleDetail,
      	addToCart: this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

export { ProductProvider, ProductConsumer };
