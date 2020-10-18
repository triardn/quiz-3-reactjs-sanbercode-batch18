import React from 'react';

import Route from './components/Route';
import {MovieListProvider} from './components/context';

function App() {
  return (
    <MovieListProvider>
      <Route />
    </MovieListProvider>
  );
}

export default App;
