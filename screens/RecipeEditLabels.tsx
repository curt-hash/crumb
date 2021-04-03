import React from 'react';
import { ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import { StackHeaderProps, StackScreenProps } from '@react-navigation/stack';

import GetTextDialog from '../components/GetTextDialog';
import SetSelect, { Item } from '../components/SetSelect';

import { StackParamList } from './RecipesStack';

type AppbarProps = StackHeaderProps & {
  onPressPlus: () => void;
};

export const RecipeEditLabelsAppbar: React.FC<AppbarProps> = ({
  previous,
  navigation,
  onPressPlus,
}) => {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Edit recipe labels" />
      <Appbar.Action icon="plus" onPress={onPressPlus} size={28} />
    </Appbar.Header>
  );
};

type Props = StackScreenProps<StackParamList, 'RecipeEditLabels'> & {
  showAddModal: boolean;
  hideAddModal: () => void;
};

export const RecipeEditLabels: React.FC<Props> = ({
  showAddModal,
  hideAddModal,
}) => {
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
  const addLabel = (label: Item) => {
    setLabels(labels.concat(label));
  };
  const setValue = (v: string) => {
    addLabel({
      value: v,
      key: v,
      selected: true,
    });
  };
  return (
    <ScrollView>
      <GetTextDialog
        label="New label"
        show={showAddModal}
        hide={hideAddModal}
        setValue={setValue}
      />
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
