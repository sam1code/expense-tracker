import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import New from './src/screens/New';
import {MyTabBar} from './src/Tabs';
import {useColorScheme} from 'react-native';
import {LightTheme, DarkTheme} from './src/assets/theme/colors';

const Tab = createBottomTabNavigator();

const renderTabBar = (props: any) => <MyTabBar {...props} />;

const AppNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : LightTheme}>
      <Tab.Navigator
        tabBar={renderTabBar}
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="New" component={New} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
