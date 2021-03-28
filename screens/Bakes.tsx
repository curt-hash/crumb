import React from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { StackParamList } from './BakesStack';

type Props = StackScreenProps<StackParamList, 'Bakes'>;

const Bakes: React.FC<Props> = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bakes</Text>
    </View>
  );
};

export default Bakes;
