import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import { OverflowMenuProvider } from 'react-navigation-header-buttons';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import RecipesStack from './screens/RecipesStack';
import BakesStack from './screens/BakesStack';
import LogStack from './screens/LogStack';
import SettingsStack from './screens/SettingsStack';

const Tab = createMaterialBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#cc5500',
    accent: 'grey',
  },
};

const App: React.FC = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <OverflowMenuProvider>
          <Tab.Navigator
            initialRouteName="Recipes"
            shifting={false}
            labeled
            activeColor={theme.colors.primary}
            inactiveColor={theme.colors.accent}
            barStyle={{
              backgroundColor: theme.colors.background,
            }}
          >
            <Tab.Screen
              name="Recipes"
              component={RecipesStack}
              options={{
                tabBarLabel: 'Recipes',
                tabBarIcon: ({ color }) => (
                  <Entypo name="add-to-list" color={color} size={21} />
                ),
              }}
            />
            <Tab.Screen
              name="Bakes"
              component={BakesStack}
              options={{
                tabBarLabel: 'Bakes',
                tabBarIcon: ({ color }) => (
                  <FontAwesome5 name="bread-slice" color={color} size={21} />
                ),
              }}
            />
            <Tab.Screen
              name="Log"
              component={LogStack}
              options={{
                tabBarLabel: 'Log',
                tabBarIcon: ({ color }) => (
                  <FontAwesome5 name="book" color={color} size={21} />
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsStack}
              options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color }) => (
                  <FontAwesome5 name="cog" color={color} size={21} />
                ),
              }}
            />
          </Tab.Navigator>
        </OverflowMenuProvider>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
