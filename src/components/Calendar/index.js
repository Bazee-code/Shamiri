import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const Calendar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.homeTitle}>For You</Text>
      <Text style={styles.homeDate}>Feb 18 2022, Friday</Text>
      <View style={styles.dateContainer}>
        <View style={styles.dateSection}>
          <AntDesign
            name="left"
            size={9}
            style={{ paddingTop: 10, paddingRight: 10 }}
            color="#FFF"
          />
          <Text style={styles.calendarRange}>Jan 13- Jan 19,2022</Text>
          <AntDesign
            name="right"
            size={9}
            style={{ paddingTop: 10, paddingLeft: 10 }}
            color="#FFF"
          />
        </View>
        <View style={styles.calendar}>
          <View style={styles.calendarDays}>
            <Text style={styles.calendarText}>S</Text>
            <Text style={styles.calendarText}>M</Text>
            <Text style={styles.calendarText}>T</Text>
            <Text style={styles.calendarText}>W</Text>
            <Text style={styles.calendarText}>T</Text>
            <Text style={styles.calendarText}>F</Text>
            <Text style={styles.calendarText}>S</Text>
          </View>
          <View style={styles.calendarDates}>
            <Text style={styles.calendarText}>13</Text>
            <Text style={styles.calendarText}>14</Text>
            <Text style={styles.calendarText}>15</Text>
            <Text style={styles.calendarText}>16</Text>
            <Text style={styles.calendarText}>17</Text>
            <Text style={styles.calendarText}>18</Text>
            <Text style={styles.calendarText}>19</Text>
          </View>
          <View style={styles.calendarToggle}>
            <View style={styles.calendarButtons}></View>
            <View style={styles.calendarButtons}></View>
            <View style={styles.calendarButtons}></View>
            <View style={styles.calendarEmojiButtons}></View>
            <View style={styles.calendarEmojiButton}></View>
            <View style={styles.calendarEmojiButtons}></View>
            <View style={styles.calendarButtons}></View>
          </View>
        </View>
      </View>
      <View style={styles.learnMore}>
        <Text style={styles.showMoreText}>
          Show More <AntDesign name="down" size={15} color="#FFF" />
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#85BDAF',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 0,
  },
  homeTitle: {
    fontSize: 30,
    fontWeight: '800',
    color: '#FFF',
    paddingLeft: 10,
  },
  homeDate: {
    fontSize: 15,
    color: '#FFF',
    marginBottom: 10,
    paddingLeft: 10,
  },
  dateContainer: {
    backgroundColor: 'rgba(188, 217, 209, 0.6)',
    borderRadius: 10,
    paddingTop: 13,
  },
  dateSection: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  calendarRange: {
    textAlign: 'center',
    paddingTop: 8,
    color: '#FFF',
    fontSize: 10,
    fontWeight: '600',
  },
  showMoreText: {
    paddingTop: 5,
    color: '#FFF',
    fontSize: 12,
  },
  learnMore: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 5,
  },
  calendar: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  calendarDays: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  calendarDates: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  calendarText: {
    color: '#FFF',
    fontSize: 12,
    letterSpacing: 2,
    fontWeight: '400',
  },
  calendarToggle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  calendarButtons: {
    height: 18,
    width: 18,
    borderRadius: 50,
    backgroundColor: '#FFF',
  },
  calendarEmojiButtons: {
    height: 18,
    width: 18,
    borderRadius: 50,
    backgroundColor: 'rgba(218,235,247,1)',
  },
  calendarEmojiButton: {
    height: 18,
    width: 18,
    borderRadius: 50,
    backgroundColor: 'rgba(255,235,0,1)',
  },
});

export default Calendar;
