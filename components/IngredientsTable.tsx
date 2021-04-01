import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DataTable, Divider, Subheading } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  flours: {
    marginBottom: 14,
  },
  header: {},
  title: {},
  row: {},
  cell: {},
});

const IngredientsTable: React.FC = () => {
  return (
    <View style={styles.container}>
      <DataTable style={styles.flours}>
        <DataTable.Header style={(styles.header, styles.row)}>
          <DataTable.Title style={(styles.title, styles.cell)}>
            Name
          </DataTable.Title>
          <DataTable.Title numeric style={(styles.title, styles.cell)}>
            Mass (g)
          </DataTable.Title>
          <DataTable.Title numeric style={(styles.title, styles.cell)}>
            %
          </DataTable.Title>
        </DataTable.Header>

        <DataTable.Row style={styles.row}>
          <DataTable.Cell style={styles.cell}>Whole wheat flour</DataTable.Cell>
          <DataTable.Cell numeric style={styles.cell}>
            750
          </DataTable.Cell>
          <DataTable.Cell numeric style={styles.cell}>
            75
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={styles.row}>
          <DataTable.Cell style={styles.cell}>Bread flour</DataTable.Cell>
          <DataTable.Cell numeric style={styles.cell}>
            250
          </DataTable.Cell>
          <DataTable.Cell numeric style={styles.cell}>
            25
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>

      <DataTable>
        <DataTable.Row>
          <DataTable.Cell>Water</DataTable.Cell>
          <DataTable.Cell numeric>750</DataTable.Cell>
          <DataTable.Cell numeric>75</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Salt</DataTable.Cell>
          <DataTable.Cell numeric>20</DataTable.Cell>
          <DataTable.Cell numeric>2</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Starter</DataTable.Cell>
          <DataTable.Cell numeric>20</DataTable.Cell>
          <DataTable.Cell numeric>2</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
};

export default IngredientsTable;
