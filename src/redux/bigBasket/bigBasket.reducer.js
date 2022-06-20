import {CREATE_SINGLE_PRODUCT_FAILURE, CREATE_SINGLE_PRODUCT_REQUEST, CREATE_SINGLE_PRODUCT_SUCCESS, DELETE_SINGLE_PRODUCT_FAILURE, DELETE_SINGLE_PRODUCT_REQUEST, DELETE_SINGLE_PRODUCT_SUCCESS, FETCH_ALL_PRODUCT_FAILURE, FETCH_ALL_PRODUCT_REQUEST, FETCH_ALL_PRODUCT_SUCCESS, FETCH_SINGLE_PRODUCT_FAILURE, FETCH_SINGLE_PRODUCT_REQUEST, FETCH_SINGLE_PRODUCT_SUCCESS, UPDATE_FORM_DATA, UPDATE_SINGLE_PRODUCT_FAILURE, UPDATE_SINGLE_PRODUCT_REQUEST, UPDATE_SINGLE_PRODUCT_SUCCESS } from "./bigBasket.action.types";

export const BIGBASKET_FEATURE_KEY = 'github';

let initialState = {
    loading : false,
    products : [],
    selectedProduct : {},
    errorMsg : ''
};

let bigBasketReducer = (state = initialState , action) => {
    let {type,payload} = action;
    switch(type) {
        case FETCH_ALL_PRODUCT_REQUEST:
            case CREATE_SINGLE_PRODUCT_REQUEST:
                case FETCH_SINGLE_PRODUCT_REQUEST:
                    case UPDATE_SINGLE_PRODUCT_REQUEST:
                        case DELETE_SINGLE_PRODUCT_REQUEST:
            return{
                ...state,
                loading : true
            };
            case FETCH_ALL_PRODUCT_SUCCESS:
            return{
                ...state,
                loading : false,
                products : payload
            };
            case FETCH_ALL_PRODUCT_FAILURE:
                case CREATE_SINGLE_PRODUCT_FAILURE:
                    case FETCH_SINGLE_PRODUCT_FAILURE:
                        case UPDATE_SINGLE_PRODUCT_FAILURE:
                            case DELETE_SINGLE_PRODUCT_FAILURE:
            return{
                ...state,
                loading : false,
                errorMsg : payload
            };
            // CREATE PRODUCT
             case CREATE_SINGLE_PRODUCT_SUCCESS:
                 return{
                     ...state,
                     loading : false
                 };
                 // Fetch SIngle product
                 case FETCH_SINGLE_PRODUCT_SUCCESS:
                     return{
                         ...state,
                         loading : false,
                         selectedProduct : payload
                     } 
                     // Update form data two way data binding
                     case UPDATE_FORM_DATA:
                         return{
                             ...state,
                             loading : false,
                             selectedProduct : {
                                 ...state.selectedProduct,
                                 [payload.key] : payload.value
                             }
                         }
                         // update form data success
                         case UPDATE_SINGLE_PRODUCT_SUCCESS :
                             return{
                                 ...state,
                                 loading : false,
                                 
                             }
                             // delete a product 
                             case DELETE_SINGLE_PRODUCT_SUCCESS:
                                 return{
                                     ...state,
                                     loading : false
                                 }
            default : return state;
    }
};

export {bigBasketReducer}