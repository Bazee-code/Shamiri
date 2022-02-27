import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const WeeklyScreen = () => {
  const navigation = useNavigation();

  const goToDaily = () => {
    navigation.navigate('Daily');
  };

  return (
    <SafeAreaView style={styles.safeAreaStyles}>
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Pressable onPress={goToDaily} hitSlop={70}>
            <AntDesign name="left" color="rgba(196, 196, 196, 1)" size={15} />
          </Pressable>
          <Text style={styles.headerDate}>Jan 13 - Jan 19,2022</Text>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.toggleButtonContainer}>
            <View style={styles.toggleButton}>
              <View style={styles.dailyButton}>
                <Pressable onPress={goToDaily}>
                  <Text style={styles.dailyText}>Daily</Text>
                </Pressable>
              </View>
              <View style={styles.weeklyButton}>
                <Text style={styles.weeklyText}>Weekly</Text>
              </View>
            </View>
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.titleStyles}>Mental Health</Text>
            <View style={styles.dataTextStyles}>
              <View>
                <Text style={styles.textStyles}>Weekly Average</Text>
                <Text style={styles.numberStyles}>6</Text>
              </View>

              <View>
                <Text style={styles.textStyles}>Week-over-week</Text>
                <Text style={styles.numberStyles}>
                  <FontAwesome name="long-arrow-down" size={20} /> 20%
                </Text>
              </View>
              <View>
                <Text style={styles.textStyles}>Goal</Text>
                <Text style={styles.numberStyles}>8</Text>
              </View>
            </View>
            <View style={styles.chartSection}>
              <Image
                style={styles.barChartStyles}
                source={require(`../../assets/images/barChart.png`)}
              />
            </View>
          </View>
        </View>
        <View style={styles.recommendationContainer}>
          <Text style={styles.recommendationText}>Recommendation</Text>
          <Image
            style={styles.imageStyles}
            source={require(`../../assets/images/recommendation.png`)}
          />
          <Text style={styles.sessionText}>1-on-1 Session</Text>
          <Text style={styles.footerText}>
            Talk to our therapists about employee burnout?
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaStyles: {
    backgroundColor: 'rgba(240,240,240,1)',
  },
  container: {
    backgroundColor: 'rgba(240,240,240,1)',
    height: screenHeight,
  },
  headerContainer: {
    padding: 20,
    borderBottomColor: 'rgba(196, 196, 196, 1)',
    borderBottomWidth: 1,
  },
  headerDate: {
    textAlign: 'center',
    marginTop: -16,
  },
  bodyContainer: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 15,
    paddingTop: 10,
    borderBottomColor: 'rgba(196, 196, 196, 1)',
    borderBottomWidth: 1,
  },
  toggleButtonContainer: {
    padding: 20,
  },
  toggleButton: {
    backgroundColor: 'rgba(246, 233, 231, 1)',
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 30,
    width: screenWidth - 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  titleStyles: {
    fontWeight: '600',
  },
  dailyButton: {
    width: '40%',
  },
  dailyText: {
    textAlign: 'center',
    padding: 3,
  },
  weeklyButton: {
    width: '50%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 30,
  },
  weeklyText: {
    textAlign: 'center',
    paddingTop: 3,
    paddingRight: 3,
  },
  dataContainer: {
    padding: 20,
  },
  dataTextStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  numberStyles: {
    textAlign: 'center',
    fontSize: 20,
    color: 'rgba(227, 168, 159, 1)',
  },
  textStyles: {
    fontSize: 12,
    color: 'grey',
  },
  recommendationContainer: {
    padding: 15,
  },
  recommendationText: {
    fontWeight: '800',
    fontSize: 15,
    paddingLeft: 10,
  },
  imageStyles: {
    marginTop: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: screenWidth - 50,
  },
  sessionText: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 12,
    fontWeight: '500',
  },
  chartSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
  },
  barChartStyles: {
    width: 200,
    height: 150,
  },
});

export default WeeklyScreen;
