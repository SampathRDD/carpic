import React from 'react'
import { Image, SafeAreaView,ScrollView, Text, View } from 'react-native'
import styles from '../Styles/History';
import { images } from '../../constants/images';

const HistoryScreen = () => {
  const data = [
    {
      id: 1,
      date: '2023 DEC 12 13.00 PM',
      location: 'Colombo',
    },
    {
      id: 2,
      date: '2023 DEC 13 14.30 PM',
      location: 'Matara',
    },
    {
      id: 3,
      date: '2023 DEC 13 16.30 PM',
      location: 'Galle',
    },
    {
      id: 4,
      date: '2023 DEC 12 13.00 PM',
      location: 'Colombo',
    },
    {
      id: 5,
      date: '2023 DEC 13 14.30 PM',
      location: 'Matara',
    },
    {
      id: 6,
      date: '2023 DEC 13 16.30 PM',
      location: 'Galle',
    },
  ];
  
  return (
    <SafeAreaView>

      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome to </Text>
        </View>
        <View style={styles.headerImageView}>
          <Image source={images.Logo} style={styles.headerImage} />

        </View>
        <ScrollView showsVerticalScrollIndicator={false}
        >
          <View style={styles.scrollView}>
          {data.map((item) => (
            <View style={styles.historycontainer} key={item.id}>
              <Image source={images.Logo} style={styles.historyImage} />
              <View style={styles.h1}>
                <Text style={styles.locationtext}>{item.location}</Text>
                <Text style={styles.Datetext}>{item.date}</Text>
              </View>
              <View style={styles.h2}>
                <Image source={images.Logo} style={styles.locationIcon} />
              </View>
            </View>))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default HistoryScreen;