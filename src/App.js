import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import MainPage from './views/MainPage/';
import SearchPage from './views/SearchPage/';
import CityListPage from './views/CityListPage/';
import CityDetailsPage from './views/CityDetailsPage/';
import RestaurantDetailsPage from './views/RestaurantDetailsPage/';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/restaurant-details' component={RestaurantDetailsPage} />
          <Route path='/city-details' component={CityDetailsPage} />
          <Route path='/city-list' component={CityListPage} />
          <Route path='/search' component={SearchPage} />
          <Route path='/' component={MainPage} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
