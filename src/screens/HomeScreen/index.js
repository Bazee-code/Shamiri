import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  View,
  Platform,
} from 'react-native';
import React from 'react';
import { Calendar, PieGraph, WellnessPlan } from '../../components';

const screenHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaStyles}>
      <ScrollView style={styles.homeScreenStyles}>
        <Calendar />
        <PieGraph />
        <WellnessPlan />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaStyles: {
    backgroundColor: Platform.OS === 'android' ? '#85BDAF' : '#85BDAF',
  },
  homeScreenStyles: {
    height: screenHeight,
    backgroundColor: '#EEE',
  },
});

export default HomeScreen;
