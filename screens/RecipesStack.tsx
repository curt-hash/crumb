import React from 'react';
import {
  createStackNavigator,
  StackHeaderProps,
} from '@react-navigation/stack';

import Recipes from './Recipes';
import RecipeCreate from './RecipeCreate';
import RecipeEditLabels from './RecipeEditLabels';

export type StackParamList = {
  Recipes: undefined;
  RecipeCreate: undefined;
  RecipeEditLabels: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const RecipesStack: React.FC = () => {
  const [showAddModal, setShowAddModal] = React.useState(false);
  const editLabelsAppbar = (props: StackHeaderProps) => {
    return (
      <RecipeEditLabels.RecipeEditLabelsAppbar
        {...props}
        onPressPlus={() => setShowAddModal(true)}
      />
    );
  };
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
      <Stack.Screen
        name="RecipeEditLabels"
        options={{
          header: editLabelsAppbar,
        }}
      >
        {props => {
          return (
            <RecipeEditLabels.RecipeEditLabels
              {...props}
              showAddModal={showAddModal}
              hideAddModal={() => setShowAddModal(false)}
            />
          );
        }}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default RecipesStack;
