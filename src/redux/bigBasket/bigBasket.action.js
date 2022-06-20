import Axios from "axios";
import { CREATE_SINGLE_PRODUCT_FAILURE, CREATE_SINGLE_PRODUCT_REQUEST, CREATE_SINGLE_PRODUCT_SUCCESS, DELETE_SINGLE_PRODUCT_FAILURE, DELETE_SINGLE_PRODUCT_REQUEST, DELETE_SINGLE_PRODUCT_SUCCESS, FETCH_ALL_PRODUCT_FAILURE, FETCH_ALL_PRODUCT_REQUEST, FETCH_ALL_PRODUCT_SUCCESS, FETCH_SINGLE_PRODUCT_FAILURE, FETCH_SINGLE_PRODUCT_REQUEST, FETCH_SINGLE_PRODUCT_SUCCESS, UPDATE_FORM_DATA, UPDATE_SINGLE_PRODUCT_FAILURE, UPDATE_SINGLE_PRODUCT_REQUEST, UPDATE_SINGLE_PRODUCT_SUCCESS} from "./bigBasket.action.types";

let fetchAllProducts = () => {
    return(dispatch) => {
        dispatch({type : FETCH_ALL_PRODUCT_REQUEST});
        let dataURL = `http://127.0.0.1:5000/api/products`;
        Axios.get(dataURL).then((response)=> {
            dispatch({type : FETCH_ALL_PRODUCT_SUCCESS , payload : response.data})
        }).catch((Error) => {
            dispatch({type : FETCH_ALL_PRODUCT_FAILURE , payload : Error})
        })
    }
};

let createProduct = (product , history) => {
    return(dispatch) => {
        dispatch({ type : CREATE_SINGLE_PRODUCT_REQUEST});
        let dataURL = `http://127.0.0.1:5000/api/products`;
        Axios.post(dataURL, product).then((response) => {
            dispatch({type : CREATE_SINGLE_PRODUCT_SUCCESS, payload : response.data});
         history.push('/admin'); 
        }).catch((error) => {
            dispatch({type : CREATE_SINGLE_PRODUCT_FAILURE , payload : error})
        })
    }
}
let fetchSingleProd = (productId) => {
    return(dispatch) => {
        dispatch({type : FETCH_SINGLE_PRODUCT_REQUEST});
        let dataURL = `http://127.0.0.1:5000/api/products/${productId}`;
        Axios.get(dataURL).then((response) => {
            dispatch({type : FETCH_SINGLE_PRODUCT_SUCCESS  , payload : response.data});
        }).catch((error) => {
            dispatch({ type : FETCH_SINGLE_PRODUCT_FAILURE , payload : error})
        })
    }
};

let updateFormData = (key , value) => {
    return(dispatch) => {
        dispatch({type : UPDATE_FORM_DATA, payload : {key , value}})
    };
};

let updateData = (productId , selectedProduct , history) =>  {
    return (dispatch) => {
        dispatch({type : UPDATE_SINGLE_PRODUCT_REQUEST});
        let dataURL = `http://127.0.0.1:5000/api/products/${productId}`;
        Axios.put(dataURL , selectedProduct).then((response) => {
            dispatch({type : UPDATE_SINGLE_PRODUCT_SUCCESS , payload : response.data})
         history.push('/admin');             
        }).catch((error) => {
            dispatch({ type : UPDATE_SINGLE_PRODUCT_FAILURE , payload : error})
        })
    }
};

let deleteProduct = (productId) => {
    return(dispatch) => {
        dispatch({type : DELETE_SINGLE_PRODUCT_REQUEST});
        let dataURL = `http://127.0.0.1:5000/api/products/${productId}`;
        Axios.delete(dataURL).then((response) => {
            dispatch({ type : DELETE_SINGLE_PRODUCT_SUCCESS , payload : response.data})
            dispatch(fetchAllProducts());
        }).catch((error) => {
            dispatch({ type : DELETE_SINGLE_PRODUCT_FAILURE , payload : error})
        })
    }
}
export {fetchAllProducts,createProduct , fetchSingleProd , updateFormData , updateData , deleteProduct};