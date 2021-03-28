import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Log from './Log';

export type StackParamList = {
  Log: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const LogStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Log" component={Log} />
    </Stack.Navigator>
  );
};

export default LogStack;
