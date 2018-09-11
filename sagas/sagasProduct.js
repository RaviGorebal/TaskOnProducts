import { put, takeLatest } from "redux-saga/effects";
import * as actionCreators from "../actionCreators/actionCreatorsProduct"
import { GET_PRODUCTS } from "../actionTypes/actionTypesProduct";

function* getProducts(action) {
    try {
        const response = yield fetch("http://10.110.60.121:4000/products");
        const products = yield response.json();
        yield put(actionCreators.getProductsSuccess(products))
    } catch (error) {
        yield put(actionCreators.getProductsFailure(error))
    }
}

export function* productWatchers() {
    yield takeLatest(GET_PRODUCTS, getProducts)
}