import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Appbar } from 'react-native-paper';
import { StackHeaderProps } from '@react-navigation/stack';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const RecipesAppbar = ({
  previous,
  navigation,
}: StackHeaderProps): JSX.Element => {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackActions onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Manage your recipes" />
      <Appbar.Action
        icon="text-box-plus-outline"
        onPress={() => navigation.navigate('RecipeCreate')}
        size={28}
      />
    </Appbar.Header>
  );
};

export const Recipes = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Recipes and whatnot</Text>
    </View>
  );
};

export default {
  Recipes,
  RecipesAppbar,
};
