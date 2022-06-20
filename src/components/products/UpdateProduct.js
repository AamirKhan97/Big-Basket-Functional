import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { fetchSingleProd, updateData, updateFormData } from "../../redux/bigBasket/bigBasket.action";
import { BIGBASKET_FEATURE_KEY } from "../../redux/bigBasket/bigBasket.reducer";
import Spinner from "../spinner/Spinner";

let UpdateProduct = () => {
    let [productId, setProductId] = useState(useParams().id)
    let dispatch = useDispatch();
    let history = useHistory();

  
    let selectedProductInfo = useSelector((state) => {
        return state[BIGBASKET_FEATURE_KEY];
    })

    useEffect(() => {
        dispatch(fetchSingleProd(productId))
    }, [productId])

    let changeInput = (event) => {
        let key = event.target.name;
        let value = event.target.value;
        dispatch(updateFormData(key, value));
      
    }

    let changeImage = async (event) => {
        let imageFile = event.target.files[0];
        let reader = await new FileReader();
        reader.readAsDataURL(imageFile);
        reader.addEventListener('load', () => {
            if (reader.result) {
                let key = 'image';
                let value = reader.result;
        dispatch(updateFormData(key, value));

               
             
            }
            else {
                alert('Error Ocurred')
            }
        })
    }
    let submitProd = (event) => {
        event.preventDefault();
        dispatch(updateData(productId,selectedProductInfo.selectedProduct,history))
    }
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row animated zoomIn">
                    <div className="col">
                        <h3 className="text-success">Update Product</h3>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquid illum assumenda molestiae omnis! Porro, dolorum possimus eaque voluptatem dolores molestiae quas iste aliquid perspiciatis inventore magnam veritatis facilis repellat?</p>
                    </div>
                </div>
                
                {
                    selectedProductInfo.loading ? <Spinner/> :
                    <React.Fragment>
                        <div className="row  animated rotateIn">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header bg-success text-white">
                                <h4>Update Product</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submitProd}>
                                    <div className="form-group">
                                        <input
                                            name="name"
                                            value={selectedProductInfo.selectedProduct.name}
                                            onChange={changeInput}
                                            type="text" className="form-control" placeholder="Product Name" />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            name="image"
                                            onChange={changeImage}
                                            className="form-control" type="file" multiple />
                                        {
                                            selectedProductInfo.selectedProduct.image &&
                                            <img src={selectedProductInfo.selectedProduct.image} width="30" height="30" className="mt-3" alt="" />
                                        }
                                    </div>
                                    <div className="form-group">
                                        <input
                                            name="price"
                                            value={selectedProductInfo.selectedProduct.price}
                                            onChange={changeInput}
                                            type="number" className="form-control" placeholder="Price" />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            name="qty"
                                            value={selectedProductInfo.selectedProduct.qty}
                                            onChange={changeInput}
                                            type="number" className="form-control" placeholder="Qty" />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            name="info"
                                            value={selectedProductInfo.selectedProduct.info}
                                            onChange={changeInput}
                                            rows="4" className="form-control" placeholder="Info"></textarea>
                                    </div>
                                    <div>
                                        <input type="submit" className="btn btn-success btn-sm" value="Update" />
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

export default UpdateProduct;