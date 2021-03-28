import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Bakes from './Bakes';

export type StackParamList = {
  Bakes: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const BakesStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bakes" component={Bakes} />
    </Stack.Navigator>
  );
};

export default BakesStack;
