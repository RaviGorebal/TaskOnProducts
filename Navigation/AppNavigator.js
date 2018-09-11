import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";
import { connect } from "react-redux";
import React from "react";
import ProductList from "../containers/productList";
import ProductSearch from "../containers/productSearch";
import { Ionicons } from "@expo/vector-icons"

const ListStack = createStackNavigator(
  {
    List: ProductList
  },
  {
    initialRouteName: "List",
    navigationOptions: {
      title: "Products",
      headerStyle: {
        backgroundColor: "gray"
      },
      headerTintColor: "black",
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center"
      }
    }
  }
);

const SearchStack = createStackNavigator(
  {
    Search: ProductSearch
  },
  {
    initialRouteName: "Search",
    navigationOptions: {
      title: "Search Products",
      headerStyle: {
        backgroundColor: "gray"
      },
      headerTintColor: "black",
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center"
      }
    }
  }
);


export const AppNavigator = createBottomTabNavigator(
  {
    List: ListStack,
    Search: SearchStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "List") {
          iconName = `md-list${focused ? "" : "-box"}`;
        } else if (routeName === "Search") {
          iconName = `ios-search${focused ? "" : "-outline"}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "black",
      inactiveTintColor: "gray",
      labelStyle: {
        fontSize: 15
      }
    }
  }
);

export const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.navState
);
const addListener = createReduxBoundAddListener("root");

class App extends React.Component {
  render() {
    return (
      <AppNavigator
        navigation={{
          dispatch: this.props.dispatch,
          state: this.props.navState,
          addListener
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  navState: state.navState
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default AppWithNavigationState;
