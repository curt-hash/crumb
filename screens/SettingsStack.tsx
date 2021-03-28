import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Settings from './Settings';

export type StackParamList = {
  Settings: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const SettingsStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
