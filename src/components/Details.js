import React from 'react';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';
import ButtonContainer from './Button';

class Details extends React.Component {
  render(){
    return(
      <ProductConsumer>
        { value => {
          const { id, company, img, info, price, title, inCart } = value.detailProduct;
          return (
            <div classname="container py-5">
            {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
            {/* end title*/}
            {/* Product Info */}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <img src={img} className="img-fluid" alt="Product"/>
              </div>
              {/* Product Text*/}
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2>model: {title}</h2>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  made by : <span className="text-uppercase">
                    { company }
                  </span>
                </h4>
                <h4 className="text-blue">
                  <strong>price : <span>$</span>{ price }</strong>
                  <p className="text-capitalized font-weight-bold mt-3 mb-0">
                    some info about product:
                  </p>
                  <p className="text-muted lead">
                    {info}
                  </p>
                  {/*button*/}
                  <div>
                    <Link to="/">
                      <ButtonContainer disable={inCart? true: false}>
                        back to products
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart 
                      onClick={()=>{
                        value.addToCart(id)
                      }}>{inCart ? "inCart" : "add to cart"}</ButtonContainer>
                  </div>
                </h4>
              </div>
            </div>
            {/* End Product Info*/}
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}

export default Details;
