import React, { } from 'react';
import './assets/sass/app.scss'
import { MyRoutes } from './navigation/Routes';
import Layout from './layout/layout'
import ReactGA from 'react-ga';

ReactGA.initialize('G-91Z99YW3PN');

function App() {

  return (
    <Layout>
      <MyRoutes />
    </Layout>
  );
}

export default App;
