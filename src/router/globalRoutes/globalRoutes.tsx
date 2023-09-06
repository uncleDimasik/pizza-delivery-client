import React, { FC } from 'react';
import Paths from './paths';
import { HomePage } from '../../pages/HomePage';
import { Outlet, RouteObject, useRoutes } from 'react-router-dom';
import { DummyPage } from '../../pages/DummyPage';
import { CategoryPage } from '../../pages/CategoryPage';
import { CartPage } from '../../pages/CartPage';
import { HeaderHome } from '../../views/HeaderHome';
import { Footer } from '../../views/Footer';
import { Main, Wrapper } from '../../styles/global';
import { AccountPage } from '../../pages/AccountPage';
import { OrderSuccessPage } from '../../pages/OrderSuccessPage';
import { Box } from '../../components/Box';
import { H1 } from '../../styles/globalFontStyles';

const GlobalRoutes: FC = () => {
  const routes: RouteObject[] = [
    {
      index: true,
      path: Paths.HOME_PAGE,
      element: <HomePage />,
    },
    {
      path: '/*',
      element: (
        <Wrapper>
          <HeaderHome />
          <Main>
            <Outlet />
          </Main>
          <Footer />
        </Wrapper>
      ),
      children: [
        {
          index: true,
          path: Paths.DUMMY_PAGE,
          element: <DummyPage />,
        },
        {
          index: true,
          path: Paths.CATEGORY_PAGE,
          element: <CategoryPage />,
        },
        {
          index: true,
          path: Paths.CART_PAGE,
          element: <CartPage />,
        },
        {
          index: true,
          path: Paths.ACCOUNT_PAGE,
          element: <AccountPage />,
        },
        {
          index: true,
          path: Paths.ORDER_SUCCESS,
          element: <OrderSuccessPage />,
        },
      ],
    },
    {
      index: true,
      path: '*',
      element: (
        <Box width={'100%'} height={'100%'}>
          <H1>PAGE NOT FOUND</H1>
        </Box>
      ),
    },
  ];

  return useRoutes(routes);
};

export default GlobalRoutes;
