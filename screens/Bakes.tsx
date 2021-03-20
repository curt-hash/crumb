import React from 'react';
import { Button, Text, View } from 'react-native';

export default Bakes = props => {
  const {
    navigation: { navigate },
  } = props;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bakes</Text>
      <Button title="Bake" onPress={() => navigate('Bake')} />
    </View>
  );
};
