import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const Width = Dimensions.get('window').width;

const WellnessPlan = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.todayText}>Your wellness plan</Text>
        <View style={styles.chartContainer}>
          <View style={styles.chartSection}></View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyles}
            source={require(`../../assets/images/wellness.jpg`)}
          />
          <Image
            style={styles.imageStyles}
            source={require(`../../assets/images/wellness.jpg`)}
          />
          <View style={styles.imageTextContainer}>
            <Text style={styles.imageText}>Veronicah N.</Text>
          </View>
        </View>
        <View style={styles.moreStyles}>
          <Text style={styles.moreText}>
            More
            <AntDesign name="right" size={8} color="rgba(0,0,0,.29804)" />
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(240,240,240,1)',
    height: 250,
    width: Width,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: 10,
    margin: 25,
    borderRadius: 20,
    height: 210,
  },
  chartContainer: {
    paddingLeft: 10,
  },
  chartSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  todayText: {
    fontSize: 12,
    fontWeight: '600',
    padding: 5,
    color: 'rgba(0,0,0,.29804)',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative',
    textAlign: 'center',
  },
  imageStyles: {
    borderRadius: 15,
    margin: 10,
  },
  moreStyles: {
    flexDirection: 'row',
    paddingRight: 10,
    justifyContent: 'flex-end',
  },
  moreText: {
    fontSize: 10,
    paddingTop: 8,
    color: 'rgba(0,0,0,.29804)',
  },
  imageTextContainer: {
    position: 'absolute',
  },
  imageText: {
    fontSize: 10,
    color: '#FFF',
    top: 100,
    left: 25,
  },
});

export default WellnessPlan;
