import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import MainPage from './views/MainPage/';
import SearchPage from './views/SearchPage/';
import CityListPage from './views/CityListPage/';
import CityDetailsPage from './views/CityDetailsPage/';
import RestaurantDetailsPage from './views/RestaurantDetailsPage/';
import CollectionDetailsPage from './views/CollectionDetailsPage'
import axios from 'axios';

axios.defaults.baseURL = "https://zomato-api-restaurants.herokuapp.com"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/collection-details/:cityId/:collectionId' component={CollectionDetailsPage} />
          <Route path='/restaurant-details/:id' component={RestaurantDetailsPage} />
          <Route path='/city-details/:id' component={CityDetailsPage} />
          <Route path='/city-list/:query' component={CityListPage} />
          <Route path='/search' component={SearchPage} />
          <Route path='/' component={MainPage} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
