import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Recipes from './Recipes';
import RecipeCreate from './RecipeCreate';

export type StackParamList = {
  Recipes: undefined;
  RecipeCreate: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export default RecipesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Recipes"
        component={Recipes.Rcipes}
        options={Recipes.stackNavigationOptions}
      />
      <Stack.Screen name="RecipeCreate" component={RecipeCreate} />
    </Stack.Navigator>
  );
};
