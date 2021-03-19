import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Log from './Log';

const Stack = createStackNavigator();

export default class LogStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Log" component={Log} />
      </Stack.Navigator>
    );
  }
}
