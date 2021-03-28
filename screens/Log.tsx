import React from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { StackParamList } from './LogStack';

type Props = StackScreenProps<StackParamList, 'Log'>;

const Log: React.FC<Props> = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Log</Text>
    </View>
  );
};

export default Log;
