import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';

const Details = ({navigation, route}) => {
    const data = route?.params?.data;
    return (
        <SafeAreaView style={styles.mainBox}>
            <ScrollView>
                <View>
                    <Image
                        source={{uri: data?.show?.image?.original}} 
                        style={styles.mainImage}
                    />

                    <View style={styles.upperNavAndLike}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <FontAwesome5 name="chevron-left" size={24} color="white"/>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Feather name="heart" size={30} color="white" />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.playBtn}>
                        <FontAwesome5 name="play" size={25} color="white" style={{marginLeft: 5}}/>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.detailsOuterBox}>
                    <Text style={styles.nameText}>{data?.show?.name}</Text>
                    <View style={styles.genreBox}>
                        <View style={{flexDirection: 'row'}}>
                            {
                                data?.show?.genres.map((genre, index) => {
                                    return(
                                        <View style={{flexDirection: 'row', alignItems: 'center'}} key={index}>
                                            <Text style={styles.text1}>{genre}</Text>
                                            {(index != (data.show.genres.length - 1)) ? <Octicons name="dot-fill" size={15} color="#525252" style={{marginHorizontal: 10}}/>: null}
                                        </View>
                                    );
                                })
                            }
                        </View>
                        <View style={styles.langBox}>
                            <Text style={{color: '#9f9f9f'}}>{data?.show?.language}</Text>
                        </View>
                    </View>
                    <View style={styles.ratingBox}>
                        <FontAwesome name="star" size={20} color="#ffc62c"/>
                        <Text style={{color: '#919191', fontSize: 17, marginLeft: 10}}>{data?.show?.rating?.average}</Text>
                    </View>
                    <View style={styles.summaryBox}>
                        <Text style={styles.text1}>{data?.show?.summary}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Details

const styles = StyleSheet.create({
    mainBox: {
        flex: 1, 
        backgroundColor: '#0d0d0d'
    },
    mainImage: {
        width: '100%', 
        height: 550, 
        resizeMode: 'cover'
    },
    upperNavAndLike: {
        position: 'absolute', 
        flexDirection: 'row', 
        left: 0, 
        right: 0, 
        top: 20, 
        justifyContent: 'space-between', 
        paddingHorizontal: 24, 
        paddingTop: 20
    },
    playBtn: {
        height: 60, 
        width: 60, 
        borderRadius: 50, 
        backgroundColor: '#fa0000', 
        alignItems: 'center', 
        justifyContent: 'center', 
        position: 'absolute', 
        right: 20, 
        bottom: 20
    },
    detailsOuterBox: {
        paddingHorizontal: 10, 
        marginTop: 10
    },
    nameText: {
        fontSize: 30, 
        fontWeight: 'bold', 
        color: 'white'
    },
    genreBox: {
        flexDirection: 'row', 
        marginTop: 10, 
        justifyContent: 'space-between'
    },
    langBox: {
        borderWidth: 1, 
        borderColor: '#9f9f9f', 
        borderRadius: 5, 
        paddingHorizontal: 5
    },
    ratingBox: {
        flexDirection: 'row', 
        marginTop: 15, 
        alignItems: 'center'
    },
    text1: {
        color: '#9f9f9f', 
        fontSize: 17
    },
    summaryBox: {
        marginTop: 5, 
        paddingBottom: 70
    }
})