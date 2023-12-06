/* eslint-disable prettier/prettier */
import { StyleSheet, View, Image, FlatList, useWindowDimensions, Text, ScrollView, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { cartSlice } from '../redux/store/features/cart/cartSlice';

const ProductDetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct);

  const { width } = useWindowDimensions();

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartSlice.actions.addCartItem({ product }));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={{ padding: 16 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.btnText}>Add to cart</Text>
      </Pressable>

      {/* Navigation icon */}
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 10,
    color: '#000',
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
    color: '#000',
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '300',
    color: '#000',
  },
  button: {
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 100,
  },
  btnText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default ProductDetailsScreen;
