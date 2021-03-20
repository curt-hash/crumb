import React from 'react';
import { Button, Text, View } from 'react-native';

export default Log = props => {
  const {
    navigation: { navigate },
  } = props;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Log</Text>
      <Button title="Entry" onPress={() => navigate('Entry')} />
    </View>
  );
};
