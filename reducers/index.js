import { combineReducers } from "redux";
import  productReducer from "./reducersProduct";
import { createNavigationReducer } from "react-navigation-redux-helpers";
import { AppNavigator } from "../Navigation/AppNavigator";


const navReducer = createNavigationReducer(AppNavigator);

const rootReducer = combineReducers({
    productState: productReducer,
    navState: navReducer
})

export default rootReducer;