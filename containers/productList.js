import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import { bindActionCreators } from "redux";
import * as productActionCreators from "../actionCreators/actionCreatorsProduct";
import { connect } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import ProductListItem from "../components/ProductListItems";
// let URI = "http://10.110.60.121:4000";

class ProductList extends Component {
    componentDidMount() {
        this.props.actions.getProducts();
    }

    _keyExtractor(p, i){
        return `${p.id}`;
    }

    _renderItem = ({item}) => (
    <ProductListItem
        {...this.props}
        id={item.id}
        title={item.title}
        image={item.image ? `${"http://10.110.60.121:4000"}/images/${item.image}` : null}
        rating={item.rating}
        price={item.price}
    />
    );

    render() {
        const { products, isLoading} = this.props;
        // products.map(p => {console.log(p.price)});
        products.sort(function(low, high){
            return high.price - low.price;
        }) 
        return (
            <View style={{flex:1,backgroundColor:'#dfdfdf'}}>
                {isLoading ? (
                    <View style={{flex:1, justifyContent: "center"}}>
                        <ActivityIndicator size="large" color="gray"/>
                    </View>
                ) :(
                    <FlatList
                    data={products}
                    keyExtractor = {this._keyExtractor}
                    renderItem = {this._renderItem}
                    />
                )
                }
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.productState.products,
        isLoading: state.productState.isLoading,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(productActionCreators, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);