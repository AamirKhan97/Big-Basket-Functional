import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAllProducts } from "../../redux/bigBasket/bigBasket.action";
import { BIGBASKET_FEATURE_KEY } from "../../redux/bigBasket/bigBasket.reducer";
import Spinner from "../spinner/Spinner";

let ProductList = () => {

    let dispatch = useDispatch();

    let allProductsInfo = useSelector((state) => {
        return state[BIGBASKET_FEATURE_KEY];
    })


    useEffect(() => {
        dispatch(fetchAllProducts());
    },[])
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col animated zoomIn">
                        <h3 className="text-success">Products List</h3>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quasi quae numquam magni alias rerum minima a obcaecati, vero ab fuga expedita, placeat corporis esse possimus recusandae molestiae! Quas, sed!</p>
                    </div>
                </div>
                {
                    allProductsInfo.loading ? <Spinner/> :
                    <React.Fragment>
                        <div className="row animated zoomInRight">
                  
                  {
                      allProductsInfo.products.length > 0 ?
                      <React.Fragment>
                          {
                              allProductsInfo.products.map((product) => {
                                  return(
                                      <div className="col-md-3 mt-3">
                                      <div className="card">
                                          <div className="card-header">
                                          <img src={product.image} className="img-fluid" height="200" width="200" alt="" />
                                          </div>
                                      
                                      <div className="card-body">
                                          <ul className="list-group">
                                              <li className="list-group-item">Name : {product.name}</li>
                                          </ul>
                                          <ul className="list-group">
                                              <li className="list-group-item">Price : {product.price}</li>
                                          </ul>
                                          <ul className="list-group">
                                              <li className="list-group-item">Qty : {product.qty}</li>
                                          </ul>
                                          <ul className="list-group">
                                              <li className="list-group-item">Info : {product.info}</li>
                                          </ul>
                                      </div>
                                      </div>
                                      </div>
                                  )
                              })
                          }
                      </React.Fragment> : null
                  }
                  
              </div>
                    </React.Fragment>
                }
            </div>
        </React.Fragment>
    )
};

export default ProductList;