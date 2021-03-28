import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Appbar } from 'react-native-paper';
import { StackHeaderProps, StackScreenProps } from '@react-navigation/stack';

import { StackParamList } from './RecipesStack';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const RecipesAppbar: React.FC<StackHeaderProps> = ({
  previous,
  navigation,
}) => {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Manage your recipes" />
      <Appbar.Action
        icon="text-box-plus-outline"
        onPress={() => navigation.navigate('RecipeCreate')}
        size={28}
      />
    </Appbar.Header>
  );
};

type Props = StackScreenProps<StackParamList, 'Recipes'>;

export const Recipes: React.FC<Props> = () => {
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
