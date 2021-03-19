import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5 } from '@expo/vector-icons';

import Recipes from './Recipes';
import RecipeCreate from './RecipeCreate';

const Stack = createStackNavigator();

export default class RecipesStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Recipes"
          component={Recipes}
          options={{
            headerRight: () => (
              <FontAwesome5.Button
                name="plus"
                backgroundColor="#fff"
                color="tomato"
                onPress={() => this.props.navigation.navigate('RecipeCreate')}>
              </FontAwesome5.Button>
            ),
          }}
        />
        <Stack.Screen
          name="RecipeCreate"
          component={RecipeCreate}
        />
      </Stack.Navigator>
    );
  }
}
