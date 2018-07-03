import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TicketList from './TicketList';
import NewTicketForm from './NewTicketForm';

function Router(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
      </Switch>
    </div>
  );
}

export default Router;
