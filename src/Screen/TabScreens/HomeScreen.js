import React, { useEffect } from 'react';
import { colors, fonts } from '../../constants';
import { images } from "../../constants/images";
import { Text, View, ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
import styles from '../Styles/Home';
import {
    responsiveHeight as RH,
    responsiveWidth as RW,
    responsiveFontSize as RF,
    responsiveScreenHeight as SH,
    responsiveScreenWidth as SW,
    responsiveScreenFontSize as SF,
  } from "react-native-responsive-dimensions";

const HomeScreen = ({navigation, props}) => {

      const data = [
        {
          id: 1,
          name: 'Toyota Prius',
          price:'$1000',
          location: 'Colombo',
          ratings: 4,
        },
        {
          id: 2,
          name: 'Audi A4',
          price:'$1050',
          location: 'Colombo',
          ratings: 4,
        },
        {
          id: 3,
          name: 'ALFA ROMEO',
          price:'$1000',
          location: 'Colombo',
          ratings: 4,
        },
    ]

    return(
        <View style={{backgroundColor:'#DFF', height:SH(100),paddingBottom:SH(12.5)}}>
            <ScrollView showsVerticalScrollIndicator={false}>
        {/*HEADER*/}
        <View style={styles.header}>
            <View style={styles.profileView}>
                <Image source={images.Profile} style={styles.profile}/>
                <Text style={styles.profileText}>Wellcome to Dhanushka !</Text>
            </View>
            <View style={styles.searchBox}>
                <TextInput placeholder="Search Location" placeholderTextColor={'gray'} style={styles.search}/>
                <Image source={images.Search} style={styles.searchIcon}/>
                <TouchableOpacity onPress={()=> navigation.navigate("mapScreen")}>
                <Image source={images.Location} style={styles.searchIcon}/>
                </TouchableOpacity>
            </View>
        </View>
        {/** BODY */}
        {data.map((item) => (
            <View style={styles.container} key={item.id}>
                <Image source={images.Logo} style={styles.carImage}/>

                <View style={styles.carDetails}>
                    <Text style={styles.carName}>{item.name}</Text>
                    <Text style={styles.carPrice}>{item.price}</Text>
                    <Image source={images.NewActive} style={styles.RatingIcon}/>
                </View>
                <View style={styles.carDetails}>
                    <Text style={styles.carName2}>Location</Text>
                    <Text style={styles.carLocation}>{item.location}</Text>
                    <Image source={images.NewActive} style={styles.RatingIcon}/>
                </View>
                <View style={styles.carDetails}>
                    <Text style={styles.carName2}>Ratings</Text>
                    <Text style={styles.carLocation}>{item.ratings}</Text>
                    <Image source={images.NewActive} style={styles.RatingIcon}/>
                </View>
            </View>
        ))}
            </ScrollView>
        </View>
    )

}
export default HomeScreen;