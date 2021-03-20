import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Bakes from './Bakes';

const Stack = createStackNavigator();

export default BakesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bakes" component={Bakes} />
    </Stack.Navigator>
  );
};
