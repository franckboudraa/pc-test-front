import React from 'react';
import { Table } from 'semantic-ui-react';

const DishesItem = props => {
  return (
    <Table.Row key={props.id}>
      <Table.Cell>{props.id}</Table.Cell>
      <Table.Cell>{props.title}</Table.Cell>
      <Table.Cell>{props.rating}</Table.Cell>
    </Table.Row>
  );
};

export default DishesItem;
