import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  StackNavigationProp,
  StackNavigationOptions,
} from '@react-navigation/stack';

import { StackParamList } from './RecipesStack';

type RecipesScreenNavigationProp = StackNavigationProp<
  StackParamList,
  'Recipes'
>;
type Props = { navigation: RecipesScreenNavigationProp };

export const stackNavigationOptions = ({
  navigation,
}: Props): StackNavigationOptions => ({
  title: 'Recipes',
  headerRight: () => (
    <FontAwesome5.Button
      name="plus"
      backgroundColor={EStyleSheet.value('$bgColor')}
      color={EStyleSheet.value('$primaryAccentColor')}
      onPress={() => navigation.navigate('RecipeCreate')}
    />
  ),
});

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Recipes = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Recipes and whatnot</Text>
    </View>
  );
};

export default {
  stackNavigationOptions,
  Recipes,
};
