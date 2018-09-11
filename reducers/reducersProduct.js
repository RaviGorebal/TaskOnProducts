import { GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  SEARCH_PRODUCT } from "../actionTypes/actionTypesProduct";

export default function productReducer(
prevState = {isLoading: false, products: [] },
action
) {
switch (action.type) {
 case GET_PRODUCTS:
     return {...prevState, isLoading: true };
 case GET_PRODUCTS_SUCCESS:
     return {...prevState, isLoading: false, products: action.products };
 case GET_PRODUCTS_FAILURE:
     return {...prevState, isLoading: false, error: action.error };
 case SEARCH_PRODUCT:
     return {
     ...prevState,
     isLoading: false,
     filteredProducts:
     action.itemName.length > 0
       ? action.products
       : action.products = []
     };
 
 default:
     return prevState;
}
}