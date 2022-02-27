import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const Width = Dimensions.get('window').width;

const PieGraph = () => {
  const navigation = useNavigation();

  const goToDailyPage = () => {
    navigation.navigate('Daily');
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.todayText}>TODAY</Text>
        <View style={styles.chartContainer}>
          <View style={styles.chartSection}>
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
            <View style={styles.listStyles}>
              <View style={styles.mentalSection}>
                <View style={styles.mentalDot}></View>
                <Text style={styles.listTextStyles}>Mental Health</Text>
              </View>
              <View style={styles.mentalSection}>
                <View style={styles.satisfactionDot}></View>
                <Text style={styles.listTextStyles}>Satisfaction</Text>
              </View>
              <View style={styles.mentalSection}>
                <View style={styles.socialDot}></View>
                <Text style={styles.listTextStyles}>Family/Social Support</Text>
              </View>
              <View style={styles.mentalSection}>
                <View style={styles.workDot}></View>
                <Text style={styles.listTextStyles}>Work</Text>
              </View>
              <View style={styles.mentalSection}>
                <View style={styles.purposeDot}></View>
                <Text style={styles.listTextStyles}>Sense of Purpose</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.moreStyles}>
          <Pressable onPress={goToDailyPage} hitSlop={50}>
            <Text style={styles.moreText}>
              More
              <AntDesign name="right" size={8} color="rgba(0,0,0,.29804)" />
            </Text>
          </Pressable>
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
  listStyles: {
    width: '50%',
  },
  todayText: {
    fontSize: 12,
    fontWeight: '600',
    padding: 5,
    color: 'rgba(0,0,0,.29804)',
  },
  moreStyles: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingRight: 10,
    justifyContent: 'flex-end',
  },
  moreText: {
    fontSize: 10,
    paddingTop: 8,
    color: 'rgba(0,0,0,.29804)',
  },
  listTextStyles: {
    fontSize: 12,
    paddingLeft: 5,
    padding: 4,
    color: 'rgba(0,0,0,.29804)',
  },
  mentalSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mentalDot: {
    height: 5,
    width: 5,
    backgroundColor: 'rgba(246, 233, 231, 1)',
    borderRadius: 50,
  },
  satisfactionDot: {
    height: 5,
    width: 5,
    backgroundColor: 'rgba(227, 168, 159, 1)',
    borderRadius: 50,
  },
  socialDot: {
    height: 5,
    width: 5,
    backgroundColor: 'rgba(188, 217, 209, 1)',
    borderRadius: 50,
  },
  workDot: {
    height: 5,
    width: 5,
    backgroundColor: 'rgba(133, 189, 175, 1)',
    borderRadius: 50,
  },
  purposeDot: {
    height: 5,
    width: 5,
    backgroundColor: 'rgba(20, 48, 41, 1)',
    borderRadius: 50,
  },
  chartStyles: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleStyles: {
    borderRadius: 50,
    borderLeftColor: '#FFF',
    borderBottomColor: '#FFF',
    borderRightColor: '#FFF',
    width: 50,
    height: 50,
    color: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 6,
  },
  secondCircleStyles: {
    borderRadius: 60,
    borderBottomColor: '#FFF',
    borderRightColor: '#FFF',
    width: 65,
    height: 65,
    color: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(133, 189, 175, 1)',
    borderWidth: 5,
  },
  thirdCircleStyles: {
    borderRadius: 70,
    borderRightColor: '#FFF',
    width: 75,
    height: 75,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(188, 217, 209, 1)',
    borderWidth: 4,
  },
  fourthCircleStyles: {
    borderRadius: 90,
    borderLeftColor: '#FFF',
    borderBottomColor: '#FFF',
    borderRightColor: '#FFF',
    width: 85,
    height: 85,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(227, 168, 159, 1)',
    borderWidth: 3,
  },
  outterCircleStyles: {
    borderRadius: 110,
    borderBottomColor: '#FFF',
    borderRightColor: '#FFF',
    width: 95,
    height: 95,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(246, 233, 231, 1)',
    borderWidth: 4,
  },
  chartData: {
    fontSize: 30,
  },
});

export default PieGraph;
