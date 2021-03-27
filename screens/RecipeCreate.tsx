import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, TextInput, Appbar, useTheme } from 'react-native-paper';
import { StackHeaderProps, StackScreenProps } from '@react-navigation/stack';

import { StackParamList } from './RecipesStack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  card: {
    marginBottom: 10,
  },
  labels: {
    color: 'grey',
    textTransform: 'none',
  },
});

export const RecipeCreateAppbar = ({
  previous,
  navigation,
}: StackHeaderProps): JSX.Element => {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Create a new recipe" />
    </Appbar.Header>
  );
};

type Props = StackScreenProps<StackParamList, 'RecipeCreate'>;

export const RecipeCreate = ({ navigation }: Props): JSX.Element => {
  const { colors } = useTheme();
  const [name, setName] = React.useState('');
  const [desc, setDesc] = React.useState('');
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <TextInput
            label="Name"
            placeholder="a short, unique name"
            mode="outlined"
            value={name}
            onChangeText={v => setName(v)}
          />
          <TextInput
            label="Description"
            mode="outlined"
            value={desc}
            onChangeText={v => setDesc(v)}
            multiline
          />
          <TextInput
            label="Labels"
            placeholder="tap to add labels"
            mode="outlined"
            value="foo, bar, baz"
            onFocus={() => navigation.navigate('RecipeEditLabels')}
            multiline
            right={
              <TextInput.Icon
                name="chevron-right"
                size={40}
                color={colors.primary}
              />
            }
          />
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Card.Title title="Ingredients" />
        </Card.Content>
      </Card>
    </View>
  );
};

export default {
  RecipeCreate,
  RecipeCreateAppbar,
};
