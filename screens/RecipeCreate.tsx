import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { Card, TextInput, Appbar, Title, List } from 'react-native-paper';
import { StackHeaderProps, StackScreenProps } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ChipList from '../components/ChipList';

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
const Test = () => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text>Content</Text>
        <Text>Content</Text>
        <Text>Content</Text>
        <Text>Content</Text>
        <Text>Content</Text>
        <Text>Content</Text>
        <Text>Content</Text>
      </Card.Content>
    </Card>
  );
};

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

export const RecipeCreate: React.FC<Props> = () => {
  const [name, setName] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [labels, setLabels] = React.useState([
    'Sourdough',
    'High hydration',
    'Whole wheat',
  ]);
  const removeLabel = (key: string) => {
    setLabels(labels.filter(label => label !== key));
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
            items={labels.map(label => ({
              key: label,
              value: label,
              closeFunc: removeLabel,
            }))}
            addButtonText="Add label"
          />
        </Card.Content>
      </Card>
      <Title style={styles.title}>Ingredients</Title>
      <Tab.Navigator>
        <Tab.Screen name="All" component={Test} />
        <Tab.Screen name="Starter" component={Test} />
        <Tab.Screen name="Poolish" component={Test} />
        <Tab.Screen name="Dough" component={Test} />
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
