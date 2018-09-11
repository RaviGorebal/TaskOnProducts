import React from "react";
import { View,Text,Image,StyleSheet,TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

class ProductListItem extends React.PureComponent {


    _handleClick(id, title){
        alert('Id: '+ id + ',\nTitle: ' + title )
    }
  render() {
    let { id,image,title,price,rating } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress = {() =>this._handleClick(id, title)}
      >
        <View style={styles.container}>
          <Image
            source={image ? { uri: image } : ''}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={{ flex: 1, justifyContent: "flex-start", marginTop:10 }}>
            <View style={styles.infoContainer}>
              <Text
                style={[styles.title, { flexShrink: 1, overflow: "hidden" }]}
              >
                {title}
              </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-start" }}>
              <View style={styles.price}>
                <FontAwesome name="rupee" size={16} color="#000" />
                <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 5 }}>
                  {price}
                </Text>
              </View>
              <View style={styles.rating}>
                <Text style={{ color: "#fff", marginRight: 4 }}>{rating || "NA"}</Text>
                <Ionicons name="md-star" size={12} color="#fff" />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    marginRight: 15,
    marginLeft: 15,
    marginBottom:8,
    marginTop:8,
    height: 120,
    borderRadius: 5,
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 15,
    marginLeft: 15
  },
  title: {
    color: "black",
    marginRight: 8,
    marginLeft: 8,
    fontSize: 12
  },
  infoContainer: {
    flexDirection: "row",
    paddingTop: 20,
    justifyContent:'space-between'
  },
  rating: {
    borderRadius: 5,
    backgroundColor: "#0040ff",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 10,
    marginLeft: 45
  },
  price: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 10,
    marginLeft: 10
  }
});
export default ProductListItem;
