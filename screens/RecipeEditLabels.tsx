import React from 'react';
import { ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import { StackHeaderProps, StackScreenProps } from '@react-navigation/stack';
import * as Haptics from 'expo-haptics';

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
      selected: true,
    },
    {
      value: 'High hydration',
      selected: false,
    },
    {
      value: 'Whole wheat',
      selected: false,
    },
  ]);
  const removeLabel = (value: string) => {
    setLabels(labels.filter(item => item.value !== value));
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };
  const toggleLabel = (toggleValue: string) => {
    setLabels(
      labels.map(({ value, selected }) => {
        return {
          value,
          selected: value === toggleValue ? !selected : selected,
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
