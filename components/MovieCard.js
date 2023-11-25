import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const MovieCard = (props) => {
  const navigation = useNavigation();
  const data = props?.data;
  return (
    <TouchableOpacity 
      style={styles.mainBox}
      onPress={() => {navigation.navigate('Details', {data: data})}}
    >
      <Image
        source={{uri: data?.show?.image?.medium}} 
        style={styles.imageBox}
      />
    </TouchableOpacity>
  )
}

export default MovieCard

const styles = StyleSheet.create({
  mainBox: {
    width: '45%',
    borderRadius: 7, 
    marginBottom: 10,
  },
  imageBox: {
    height: 300, 
    width: '100%', 
    borderRadius: 8, 
    resizeMode: 'contain'
  }
})