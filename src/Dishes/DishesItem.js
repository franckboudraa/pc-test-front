import React from 'react';
import _ from 'lodash';
import { Icon, Label, Rating, Table } from 'semantic-ui-react';

const DishesItem = props => {
  return (
    <Table.Row key={props.id}>
      <Table.Cell>{props.id}</Table.Cell>
      <Table.Cell>
        {props.is_hot ? (
          <span>
            <Icon name="thermometer full" color="red" size="big" inverted /> Hot
          </span>
        ) : (
          <span>
            <Icon name="thermometer empty" color="blue" size="big" inverted />{' '}
            Cold
          </span>
        )}
      </Table.Cell>
      <Table.Cell>{props.title}</Table.Cell>
      <Table.Cell>{_.truncate(props.description)}</Table.Cell>
      <Table.Cell>
        <Rating
          icon="star"
          disabled
          defaultRating={props.rating}
          maxRating={5}
        />
      </Table.Cell>
      <Table.Cell>
        <Label tag as="a">
          {props.price}€
        </Label>
      </Table.Cell>
      <Table.Cell>
        {props.is_available ? (
          <Label className="pc-green">Available</Label>
        ) : (
          <Label color="red">Not available</Label>
        )}
      </Table.Cell>
    </Table.Row>
  );
};

export default DishesItem;
