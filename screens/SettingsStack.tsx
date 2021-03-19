import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Settings from './Settings';

const Stack = createStackNavigator();

export default class SettingsStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    );
  }
}
