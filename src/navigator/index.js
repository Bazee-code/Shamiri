import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, WeeklyScreen, DailyScreen } from '../screens';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Daily" component={DailyScreen} />
        <Stack.Screen name="Weekly" component={WeeklyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
