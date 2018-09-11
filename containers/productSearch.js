
import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { bindActionCreators } from "redux";
import * as productActionCreators from "../actionCreators/actionCreatorsProduct";
import { connect } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import { SearchBar } from 'react-native-elements';
import ProductListItem from "../components/ProductListItems";
let URI = "http://10.110.60.121:4000";

class ProductSearch extends Component {   

    _keyExtractor(p, i){
        return `${p.id}`;
    }

    _renderItem = ({item}) => (
        <ProductListItem
        {...this.props}
        id={item.id}
        title={item.title}
        image={item.image ? `${ URI }/images/${item.image}` : null}
        rating={item.rating}
        price={item.price}
    />
    );

    _onSearch = (searchProduct) => {            
        let filterProduct = this.props.products.filter((fill) => fill.title.toLowerCase().indexOf(searchProduct.toLowerCase())> -1);
        this.props.actions.getSearchProduct(filterProduct, searchProduct);
    }
   

    render() {
        // debugger;
        const { isLoading, filteredProducts} = this.props;              
        filteredProducts.sort(function(low, high){
            return low.rating - high.rating;
        }) 
    
        return (
            <View style={{flex:1,backgroundColor:'gray'}}>
                <SearchBar
                lightTheme
                onChangeText={this._onSearch.bind(this)}                
                placeholder='Type here to search the products' />
                {isLoading ? (
                    <View style={{flex:1, justifyContent: "center"}}>
                        <ActivityIndicator size="large" color="gray"/>
                    </View>
                ) :(
                    filteredProducts.length > 0 ?
                      <FlatList
                        data={this.props.filteredProducts}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                       
                      />
                      :
                      <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}>
                        <Text style={{ justifyContent: 'center', alignItems: 'center' }}>No products shown as of now, please search for products. </Text>
                        
                      </View>
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
        filteredProducts: state.productState.filteredProducts,
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
)(ProductSearch);