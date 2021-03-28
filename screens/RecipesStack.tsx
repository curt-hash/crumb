import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Recipes from './Recipes';
import RecipeCreate from './RecipeCreate';

export type StackParamList = {
  Recipes: undefined;
  RecipeCreate: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const RecipesStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Recipes" headerMode="screen">
      <Stack.Screen
        name="Recipes"
        component={Recipes.Recipes}
        options={{
          header: Recipes.RecipesAppbar,
        }}
      />
      <Stack.Screen
        name="RecipeCreate"
        component={RecipeCreate.RecipeCreate}
        options={{
          header: RecipeCreate.RecipeCreateAppbar,
        }}
      />
    </Stack.Navigator>
  );
};

export default RecipesStack;
