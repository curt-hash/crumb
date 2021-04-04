import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Chip } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 3,
  },
});

export interface Props {
  values: string[];
  closeFunc?: (value: string) => void;
  lastChipIcon?: string;
  lastChipText?: string;
  lastChipFunc?: () => void;
}

const ChipList: React.FC<Props> = ({
  values,
  closeFunc,
  lastChipIcon,
  lastChipText,
  lastChipFunc,
}) => {
  return (
    <View style={styles.container}>
      {values.map(value => (
        <Chip
          style={styles.chip}
          key={value}
          onClose={closeFunc ? () => closeFunc(value) : undefined}
        >
          {value}
        </Chip>
      ))}
      {lastChipIcon && lastChipText && lastChipFunc && (
        <Chip style={styles.chip} onPress={lastChipFunc} icon={lastChipIcon}>
          {lastChipText}
        </Chip>
      )}
    </View>
  );
};

export default ChipList;
