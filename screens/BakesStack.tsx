import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Bakes from './Bakes';

const Stack = createStackNavigator();

export default class BakesStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Bakes" component={Bakes} />
      </Stack.Navigator>
    );
  }
}
