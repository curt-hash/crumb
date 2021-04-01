import React from 'react';
import { ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import { StackHeaderProps, StackScreenProps } from '@react-navigation/stack';

import SetSelect from '../components/SetSelect';

import { StackParamList } from './RecipesStack';

export const RecipeEditLabelsAppbar: React.FC<StackHeaderProps> = ({
  previous,
  navigation,
}) => {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Edit recipe labels" />
    </Appbar.Header>
  );
};

type Props = StackScreenProps<StackParamList, 'RecipeEditLabels'>;

export const RecipeEditLabels: React.FC<Props> = () => {
  const [labels, setLabels] = React.useState([
    {
      value: 'Sourdough',
      key: 'sourdough',
      selected: true,
    },
    {
      value: 'High hydration',
      key: 'high hydration',
      selected: false,
    },
    {
      value: 'Whole wheat',
      key: 'ww',
      selected: false,
    },
  ]);
  const removeLabel = (key: string) => {
    setLabels(labels.filter(item => item.key !== key));
  };
  const toggleLabel = (toggleKey: string) => {
    setLabels(
      labels.map(({ value, key, selected }) => {
        return {
          key,
          value,
          selected: key === toggleKey ? !selected : selected,
        };
      }),
    );
  };
  return (
    <ScrollView>
      <SetSelect
        items={labels}
        deleteItem={removeLabel}
        toggleItem={toggleLabel}
      />
    </ScrollView>
  );
};

export default {
  RecipeEditLabels,
  RecipeEditLabelsAppbar,
};
