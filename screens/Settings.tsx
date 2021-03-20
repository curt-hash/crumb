import React from 'react';
import { Button, Text, View } from 'react-native';

export default Settings = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings</Text>
      <Button title="Setting" onPress={() => navigation.navigate('Setting')} />
    </View>
  );
};
