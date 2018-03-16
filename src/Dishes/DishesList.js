import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchDishes } from '../actions';

import DishesItem from './DishesItem';
import DishesError from './DishesError';

import { Loader } from 'semantic-ui-react';

class DishesList extends PureComponent {
  componentDidMount() {
    this.props.fetchDishes();
  }
  render() {
    console.log(this.props);
    const { error, loading, dishes } = this.props.dishes;
    return (
      <div>
        {loading && <Loader active inline="centered" />}
        {error && <DishesError />}
        {!error &&
          !loading &&
          dishes.map(dish => <DishesItem key={dish.id} {...dish} />)}
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
