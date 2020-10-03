/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';

import RouteDrawer from './RouteDrawer';
import { EstabelecimentoProvider } from '../Contexts/Estabelecimento';

const Routes = () => {

  return (
    <EstabelecimentoProvider>
      <RouteDrawer />
    </EstabelecimentoProvider>
  )
};

export default Routes;
