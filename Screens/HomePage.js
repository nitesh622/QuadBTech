import { StyleSheet, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

const HomePage = () => {
  const [moviesData, setMoviesData] = useState([]);
  useEffect(()=> {
    getMovies();
  }, [])

  const getMovies = async () => {
    const url = `https://api.tvmaze.com/search/shows?q=all`;
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
      <View style={styles.logoDiv}>
        <Image source={require('../assets/quadblightlogo.png')} style={{height: 100, width: 150}}/>
      </View>

      <ScrollView>
        <View style={styles.moviesDiv}>
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

export default HomePage

const styles = StyleSheet.create({
  mainBox: {
    flex: 1, 
    backgroundColor: '#0d0d0d', 
    paddingTop: 20
  },
  logoDiv: {
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'center'
  },
  moviesDiv: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    width: '100%', 
    justifyContent: 'space-evenly', 
    paddingBottom: 60
  }
})