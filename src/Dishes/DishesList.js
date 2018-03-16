import React, { PureComponent } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchDishes } from '../actions';

import DishesItem from './DishesItem';
import DishesError from './DishesError';

import { Loader, Table } from 'semantic-ui-react';

class DishesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      column: null,
      direction: null,
      data: []
    };
  }

  componentDidMount() {
    this.props.fetchDishes();
    /*this.setState({
      data: this.props.dishes.dishes
    });*/
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.dishes.dishes
    });
  }

  handleSort = clickedColumn => () => {
    const { column, direction, data } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending'
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending'
    });
  };

  render() {
    const { error, loading } = this.props.dishes;
    const { column, data, direction } = this.state;
    return (
      <div>
        {loading && <Loader active inline="centered" />}
        {error && <DishesError />}
        {!error &&
          !loading &&
          data && (
            <Table sortable celled fixed>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell
                    sorted={column === 'id' ? direction : null}
                    onClick={this.handleSort('id')}
                  >
                    id
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    sorted={column === 'title' ? direction : null}
                    onClick={this.handleSort('title')}
                  >
                    Title
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    sorted={column === 'is_hot' ? direction : null}
                    onClick={this.handleSort('is_hot')}
                  >
                    Type
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    sorted={column === 'rating' ? direction : null}
                    onClick={this.handleSort('rating')}
                  >
                    Rating
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    sorted={column === 'price' ? direction : null}
                    onClick={this.handleSort('price')}
                  >
                    Price
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    sorted={column === 'is_available' ? direction : null}
                    onClick={this.handleSort('is_available')}
                  >
                    Availability
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {data.map(dish => <DishesItem key={dish.id} {...dish} />)}
              </Table.Body>
            </Table>
          )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dishes: state.dishes
  };
}

export default connect(mapStateToProps, { fetchDishes })(DishesList);
