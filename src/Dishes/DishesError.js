import React from 'react';

import { Message } from 'semantic-ui-react';

const DishesError = () => {
  return (
    <Message negative>
      <Message.Header>Oops!</Message.Header>
      <p>An error occured while fetching dishes, please try again.</p>
    </Message>
  );
};

export default DishesError;
