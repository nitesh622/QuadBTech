import { StyleSheet, View, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MovieCard from '../components/MovieCard';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [moviesData, setMoviesData] = useState([]);

  const getMovies = async () => {
    const url = `https://api.tvmaze.com/search/shows?q=${searchText}`;
    const options = {
      method: 'GET',
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setMoviesData(result);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <View style={styles.mainBox}>
      <View style={{flexDirection: 'row', alignItems: 'center', padding: 5}}>
        <View style={styles.mainContainer}>
            <TextInput 
              style={{fontSize: 16, color: '#9f9f9f'}}
              placeholderTextColor={'#9f9f9f'}
              placeholder="Search your movie or show here" 
              value={searchText}
              onChangeText={text => setSearchText(text)}
              onSubmitEditing={()=>{getMovies()}}
            />
            <FontAwesome name="search" size={25} color="#9f9f9f"/>
        </View>
      </View>

      <ScrollView>
        <View style={styles.moviesBox}>
          {
            moviesData.map((data, index) => {
              return(<MovieCard data={data} key={index}/>);
            })
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  mainBox: {
    felx:1, 
    width: '100%', 
    height: '100%', 
    backgroundColor: '#0d0d0d', 
    paddingTop: 20
  },
  mainContainer: {
    backgroundColor: '#353535',
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  moviesBox: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    width: '100%', 
    justifyContent: 'space-evenly', 
    paddingBottom: 60
  }
})