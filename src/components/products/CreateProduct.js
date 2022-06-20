import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { createProduct } from "../../redux/bigBasket/bigBasket.action";
import { BIGBASKET_FEATURE_KEY } from "../../redux/bigBasket/bigBasket.reducer";
import Spinner from "../spinner/Spinner";

let CreateProduct = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    let [createProd, setCreateProd] = useState({
        name: '',
        image: '',
        price: '',
        qty: '',
        info: ''
    });
    let createProdInfo = useSelector((state) => {
        return state[BIGBASKET_FEATURE_KEY];
    })

    let changeInput = (e) => {
        setCreateProd({
            ...createProd,
            [e.target.name]: e.target.value
        })
    }

    let changeImage = async (event) => {
        let imageFile = event.target.files[0];
        let reader = await new FileReader();
        reader.readAsDataURL(imageFile);
        reader.addEventListener('load', () => {
            if (reader.result) {
                setCreateProd({
                    ...createProd,
                    image: reader.result
                })
            }
            else {
                alert('error occured')
            }
        })
    }

    let submitForm = (event) => {
        event.preventDefault();
        dispatch(createProduct(createProd, history))
    }
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row animated zoomIn">
                    <div className="col">
                        <h3 className="text-success">Create Product</h3>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto neque earum assumenda dolorum dolore facere incidunt quas tempore. Excepturi architecto nulla dolorem provident voluptatem in deleniti, odio nostrum aspernatur minus!</p>
                    </div>
                </div>
              {
                  createProdInfo.loading ? <Spinner/> :
                  <React.Fragment>
                        <div className="row  animated rotateIn">
                    <div className="col-md-8">
                        {/* <pre>{JSON.stringify(createProd)}</pre> */}
                        <div className="card">
                            <div className="card-header bg-success text-white">
                                <h4>Create Product</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submitForm}>
                                    <div className="form-group">
                                        <input
                                            name="name"
                                            onChange={changeInput}
                                            type="text" className="form-control" placeholder="Product name   " />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            name="image"
                                            onChange={changeImage}
                                            className="form-control" type="file" multiple />
                                        {
                                            createProd.image &&
                                            <img src={createProd.image} width="30" height="30" className="mt-3" alt="" />
                                        }
                                    </div>
                                    <div className="form-group">
                                        <input
                                            name="price"
                                            onChange={changeInput}
                                            type="number" className="form-control" placeholder="Product Price" />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            name="qty"
                                            onChange={changeInput}
                                            type="number" className="form-control" placeholder="Product Qty" />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            name="info"
                                            onChange={changeInput}
                                            className="form-control" rows="3" placeholder="Product Info"></textarea>
                                    </div>
                                    <div>
                                        <input type="submit" className="btn btn-outline-success btn-sm" value="create" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                  </React.Fragment>
              }
            </div>
        </React.Fragment>
    )
};

export default CreateProduct;