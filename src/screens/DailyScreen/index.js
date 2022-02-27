import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Pressable,
  Button,
} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const DailyScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.navigate('Home');
  };
  const goToWeekly = () => {
    navigation.navigate('Weekly');
  };

  return (
    <SafeAreaView style={styles.safeAreaStyles}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Pressable onPress={goBack} hitSlop={70}>
            <Text>
              <AntDesign name="left" color="rgba(196, 196, 196, 1)" size={15} />
            </Text>
          </Pressable>
          <View>
            <Text style={styles.headerDate}>Wed Jan 16,2022</Text>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.toggleButtonContainer}>
            <View style={styles.toggleButton}>
              <View style={styles.dailyButton}>
                <Text style={styles.dailyText}>Daily</Text>
              </View>
              <View style={styles.weeklyButton}>
                <Pressable onPress={goToWeekly} >
                  <Text style={styles.weeklyText}>Weekly</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.chartStyles}>
            <View style={styles.outterCircleStyles}>
              <View style={styles.fourthCircleStyles}>
                <View style={styles.thirdCircleStyles}>
                  <View style={styles.secondCircleStyles}>
                    <View style={styles.circleStyles}>
                      <Text style={styles.chartData}>50</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardContainerStyles}>
              <View style={styles.cardStyles}>
                <Text style={styles.cardText}>Mental Health</Text>
                <Text style={styles.cardText}>8/10</Text>
              </View>
              <View style={styles.healthSection}></View>
              <View style={styles.cardStyles}>
                <Text style={styles.cardText}>Satisfaction</Text>
                <Text style={styles.cardText}>2.5/10</Text>
              </View>
              <View style={styles.satisfactionSection}></View>
              <View style={styles.cardStyles}>
                <Text style={styles.cardText}>Family/Social Support</Text>
                <Text style={styles.cardText}>4.5/10</Text>
              </View>
              <View style={styles.socialSection}></View>
              <View style={styles.cardStyles}>
                <Text style={styles.cardText}>Work</Text>
                <Text style={styles.cardText}>6/10</Text>
              </View>
              <View style={styles.workSection}></View>
              <View style={styles.cardStyles}>
                <Text style={styles.cardText}>Sense of Purpose</Text>
                <Text style={styles.cardText}>4/10</Text>
              </View>
              <View style={styles.purposeSection}></View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaStyles: {
    backgroundColor: '#E5E5E5',
  },
  container: {
    backgroundColor: '#E5E5E5',
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
    padding: 15,
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
  dailyButton: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: '50%',
    borderRadius: 30,
  },
  dailyText: {
    textAlign: 'center',
    padding: 3,
  },
  weeklyButton: {
    width: '40%',
  },
  weeklyText: {
    textAlign: 'center',
    paddingTop: 3,
    paddingRight: 3,
  },
  chartStyles: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  cardContainer: {
    padding: 20,
  },
  cardContainerStyles: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 15,
  },
  cardStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  healthSection: {
    backgroundColor: 'rgba(246, 233, 231, 1)',
    padding: 7,
    width: '70%',
    borderRadius: 30,
    marginBottom: 10,
  },
  satisfactionSection: {
    backgroundColor: 'rgba(227, 168, 159, 1)',
    padding: 7,
    width: '30%',
    borderRadius: 30,
    marginBottom: 10,
  },
  socialSection: {
    backgroundColor: 'rgba(188, 217, 209, 1)',
    padding: 7,
    width: '45%',
    borderRadius: 30,
    marginBottom: 10,
  },
  workSection: {
    backgroundColor: 'rgba(188, 217, 209, 1)',
    padding: 7,
    width: '55%',
    borderRadius: 30,
    marginBottom: 10,
  },
  purposeSection: {
    backgroundColor: 'rgba(20, 48, 41, 1)',
    padding: 7,
    width: '45%',
    borderRadius: 30,
    marginBottom: 10,
  },
  circleStyles: {
    borderRadius: 50,
    borderLeftColor: '#E5E5E5',
    borderBottomColor: '#E5E5E5',
    borderRightColor: '#E5E5E5',
    width: 80,
    height: 80,
    color: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 12,
  },
  secondCircleStyles: {
    borderRadius: 60,
    borderBottomColor: '#E5E5E5',
    borderRightColor: '#E5E5E5',
    margin: 10,
    width: 110,
    height: 110,
    color: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(133, 189, 175, 1)',
    borderWidth: 9,
  },
  thirdCircleStyles: {
    borderRadius: 70,
    borderRightColor: '#E5E5E5',
    width: 140,
    height: 140,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(188, 217, 209, 1)',
    borderWidth: 9,
  },
  fourthCircleStyles: {
    borderRadius: 90,
    borderLeftColor: '#E5E5E5',
    borderBottomColor: '#E5E5E5',
    borderRightColor: '#E5E5E5',
    width: 170,
    height: 170,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(227, 168, 159, 1)',
    borderWidth: 9,
  },
  outterCircleStyles: {
    borderRadius: 110,
    borderBottomColor: '#E5E5E5',
    borderRightColor: '#E5E5E5',
    width: 200,
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(246, 233, 231, 1)',
    borderWidth: 9,
  },
  chartData: {
    fontSize: 40,
  },
  cardText: {
    color: 'rgba(151, 151, 151, 1)',
    fontSize: 10,
  },
});

export default DailyScreen;
