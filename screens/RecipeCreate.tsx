import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, TextInput, Appbar, Title, List } from 'react-native-paper';
import { StackHeaderProps, StackScreenProps } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ChipList from '../components/ChipList';
import IngredientsTable from '../components/IngredientsTable';

import { StackParamList } from './RecipesStack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textTransform: 'uppercase',
    paddingLeft: 5,
    color: '#373737',
    fontSize: 14,
  },
  card: {
    borderRadius: 0,
    marginBottom: 10,
  },
});

const Tab = createMaterialTopTabNavigator();

export const RecipeCreateAppbar: React.FC<StackHeaderProps> = ({
  previous,
  navigation,
}) => {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Create a new recipe" />
    </Appbar.Header>
  );
};

type Props = StackScreenProps<StackParamList, 'RecipeCreate'>;

export const RecipeCreate: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [labels, setLabels] = React.useState([
    'Sourdough',
    'High hydration',
    'Whole wheat',
  ]);
  const removeLabel = (value: string) => {
    setLabels(labels.filter(label => label !== value));
  };
  const editLabels = () => {
    navigation.navigate('RecipeEditLabels');
  };
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <TextInput
            label="Name"
            placeholder="a short, unique name"
            mode="outlined"
            value={name}
            onChangeText={v => setName(v)}
            dense
          />
          <TextInput
            label="Description"
            mode="outlined"
            value={desc}
            onChangeText={v => setDesc(v)}
            multiline
            blurOnSubmit
            dense
          />
        </Card.Content>
      </Card>

      <Title style={styles.title}>Labels</Title>
      <Card style={styles.card}>
        <Card.Content>
          <ChipList
            values={labels}
            closeFunc={removeLabel}
            lastChipIcon="playlist-edit"
            lastChipText="Edit labels"
            lastChipFunc={editLabels}
          />
        </Card.Content>
      </Card>

      <Title style={styles.title}>Ingredients</Title>
      <Tab.Navigator style={{ marginBottom: 10 }}>
        <Tab.Screen name="All" component={IngredientsTable} />
        <Tab.Screen name="Starter" component={IngredientsTable} />
        <Tab.Screen name="Poolish" component={IngredientsTable} />
        <Tab.Screen name="Dough" component={IngredientsTable} />
      </Tab.Navigator>

      <Title style={styles.title}>Steps</Title>
      <List.AccordionGroup>
        <List.Accordion title="Levain Build" id="1">
          <List.Item title="Item 1" />
        </List.Accordion>
        <List.Accordion title="Autolyse" id="2">
          <List.Item title="Item 1" />
        </List.Accordion>
        <List.Accordion title="Mix" id="3">
          <List.Item title="Item 1" />
        </List.Accordion>
      </List.AccordionGroup>
    </ScrollView>
  );
};

export default {
  RecipeCreate,
  RecipeCreateAppbar,
};
