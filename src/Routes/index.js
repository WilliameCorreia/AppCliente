/* eslint-disable prettier/prettier */
import React from 'react';

import ProdutosProvider from '../Contexts/ProdutoContext'

import RouteDrawer from './RouteDrawer';

const Routes = () => {

  return (
    <ProdutosProvider>
      <RouteDrawer />
    </ProdutosProvider>
  )

};

export default Routes;
