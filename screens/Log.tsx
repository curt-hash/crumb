import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

export default class Log extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Log</Text>
        <Button
          title="Entry"
          onPress={() => this.props.navigation.navigate("Entry")}
        />
      </View>
    );
  }
}
