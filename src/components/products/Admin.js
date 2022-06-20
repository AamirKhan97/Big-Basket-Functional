import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { deleteProduct, fetchAllProducts } from "../../redux/bigBasket/bigBasket.action";
import { BIGBASKET_FEATURE_KEY } from "../../redux/bigBasket/bigBasket.reducer";
import Spinner from "../spinner/Spinner";

let Admin = () => {
    let dispatch = useDispatch();

    let productInfo = useSelector((state) => {
        return state[BIGBASKET_FEATURE_KEY];
    })

    useState(() => {
        dispatch(fetchAllProducts())
    },[])

    let deleteBtn = (productId) => {
        dispatch(deleteProduct(productId))
    }
    return (
        <React.Fragment>
            <div className="container mt-3">
            <div className="row">
                <div className="col animated zoomIn">
                    <h3 className="text-success">Admin Page</h3>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit numquam qui iste, quia, esse libero quam rem eligendi atque magnam, officia ut. Reiciendis incidunt eius porro dolor, voluptas excepturi nobis?</p>
                    <Link to="/createProduct" className="btn btn-success btn-sm">Create Product</Link>
                </div>
            </div>
            {
                productInfo.loading ? <Spinner/> :
                <React.Fragment>
                      <div className="row mt-3 animated rotateIn">
                <div className="col">
                    <table className="table table table-hover table-success table-striped text-center">
                        <thead className="bg-success text-white">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productInfo.products.length > 0 ?
                                <React.Fragment>
                                    {
                                        productInfo.products.map((product) => {
                                            return(
                                                <tr key={product._id}>
                                                    <td>{product._id.substr(product._id.length - 4)}</td>
                                                    <td>{product.name}</td>
                                                    <td>
                                                        <img src={product.image}  className="img-thumbnail" height="50" width="50" alt="" />
                                                    </td>
                                                    <td>&#8377;{product.price}</td>
                                                    <td>{product.qty}</td>
                                                    <Link to={`/updateProduct/${product._id}`} className="btn btn-dark btn-sm mt-3 mx-2" >Update</Link>
                                                    <button onClick={deleteBtn.bind(this,product._id)} to={`/updateProduct/${product._id}`} className="btn btn-danger btn-sm mt-3 mx-2" >Delete</button>
                                                </tr>   
                                            )
                                        })
                                    }
                                </React.Fragment> : null
                            }
                        </tbody>
                    </table>
                </div>
            </div>
                </React.Fragment>
            }
            </div>
        </React.Fragment>
    )
};

export default Admin;