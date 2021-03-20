import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

import RecipesStack from './screens/RecipesStack';
import BakesStack from './screens/BakesStack';
import LogStack from './screens/LogStack';
import SettingsStack from './screens/SettingsStack';

const Tab = createBottomTabNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            switch (route.name) {
              case 'Recipes': {
                return <Entypo name="add-to-list" size={size} color={color} />;
              }
              case 'Bakes': {
                return (
                  <FontAwesome5 name="bread-slice" size={size} color={color} />
                );
              }
              case 'Log': {
                return <FontAwesome5 name="book" size={size} color={color} />;
              }
              case 'Settings': {
                return <FontAwesome5 name="cog" size={size} color={color} />;
              }
              default: {
                throw new Error(`unhandled route name: ${route.name}`);
              }
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: EStyleSheet.value('$primaryAccentColor'),
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Recipes" component={RecipesStack} />
        <Tab.Screen name="Bakes" component={BakesStack} />
        <Tab.Screen name="Log" component={LogStack} />
        <Tab.Screen name="Settings" component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

EStyleSheet.build({
  $bgColor: '#fff',
  $primaryAccentColor: '#cc5500',
});
