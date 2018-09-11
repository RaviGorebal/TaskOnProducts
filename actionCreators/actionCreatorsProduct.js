import {GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,SEARCH_PRODUCT_EMPTY,
  SEARCH_PRODUCT } from "../actionTypes/actionTypesProduct";

export function getProducts(page, limit) {
return {
  type: GET_PRODUCTS,
  page,
  limit
}
}

export function getProductsSuccess(products) {
return {
  type: GET_PRODUCTS_SUCCESS,
  products
};
}

export function getProductsFailure(error) {
return {
  type: GET_PRODUCTS_FAILURE,
  error
};
}

export function getSearchProduct(products, itemName) {
return {
  type: SEARCH_PRODUCT,
  products,
  itemName
};
}
export function getSearchProductEmpty(products, itemName) {
  return {
    type: SEARCH_PRODUCT_EMPTY,
    products,
    itemName
  };

}