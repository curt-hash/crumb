import React from 'react';
import { Pressable, View, StyleSheet, Keyboard } from 'react-native';
import {
  Card,
  TextInput,
  Appbar,
  useTheme,
  Chip,
  Button,
} from 'react-native-paper';
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
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 3,
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
            blurOnSubmit
          />
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="Labels" />
        <Card.Content style={styles.chips}>
          <Chip style={styles.chip} onClose={() => console.log('close')}>
            Sourdough
          </Chip>
          <Chip style={styles.chip} onClose={() => console.log('close')}>
            High hydration
          </Chip>
          <Chip style={styles.chip} onClose={() => console.log('close')}>
            Whole wheat
          </Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('add')}
            icon="plus"
          >
            Add label
          </Chip>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="Ingredients" />
        <Card.Content />
      </Card>
    </View>
  );
};

export default {
  RecipeCreate,
  RecipeCreateAppbar,
};
