import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Log from './Log';

const Stack = createStackNavigator();

export default LogStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Log" component={Log} />
    </Stack.Navigator>
  );
};
