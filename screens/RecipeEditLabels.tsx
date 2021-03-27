import React, { useState } from 'react';
import { Appbar, List } from 'react-native-paper';
import { StackHeaderProps } from '@react-navigation/stack';

import SwipeDeleteList from '../components/SwipeDeleteList';

export const RecipeEditLabelsAppbar = ({
  previous,
  navigation,
}: StackHeaderProps): JSX.Element => {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Edit recipe labels" />
    </Appbar.Header>
  );
};

const renderLabel = (label): JSX.Element => {
  return (
    <List.Item
      title={label}
      style={{
        backgroundColor: '#fff',
      }}
    />
  );
};

const renderItem = label => {
  return {
    key: label,
    value: renderLabel(label),
  };
};

export const RecipeEditLabels = (): JSX.Element => {
  const [labels, setLabels] = useState(['foo', 'bar', 'baz']);

  const deleteItem = key => {
    setLabels(v => v.filter(item => item !== key));
  };

  return (
    <SwipeDeleteList
      items={labels}
      renderItem={renderItem}
      deleteItem={deleteItem}
    />
  );
};

export default {
  RecipeEditLabels,
  RecipeEditLabelsAppbar,
};
