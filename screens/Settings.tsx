import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

export default class Settings extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings</Text>
        <Button
          title="Setting"
          onPress={() => this.props.navigation.navigate("Setting")}
        />
      </View>
    );
  }
}
