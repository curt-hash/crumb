import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

export default class Bakes extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Bakes</Text>
        <Button
          title="Bake"
          onPress={() => this.props.navigation.navigate("Bake")}
        />
      </View>
    );
  }
}
