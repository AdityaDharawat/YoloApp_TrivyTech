import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import GinieScreen from './screens/GinieScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import YoloPayScreen from './screens/YoloPayScreen.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors, background: 'black' } }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = route.name === 'Home' ? 'home' :
                           route.name === 'YoloPay' ? 'card' :
                           'sparkles';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#000',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            paddingBottom: 8,
            height: 60
          },
          headerShown: false
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="YoloPay" component={YoloPayScreen} />
        <Tab.Screen name="Ginie" component={GinieScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
