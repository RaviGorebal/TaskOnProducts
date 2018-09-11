import React from "react";
import { Provider} from "react-redux";
import store from "./store";
import AppWithNavigationState from "./Navigation/AppNavigator";

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
