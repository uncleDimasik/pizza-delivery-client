import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from './styles/themeProvider';
import GlobalRoutes from './router/globalRoutes/globalRoutes';
import { store } from './store/store';
import './i18n/config';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/apollo.config';
import { AuthModal } from './views/AuthModal';

const App: FC = () => {
  console.log(process.env);
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ThemeProvider>
          <BrowserRouter>
            {/* <Suspense fallback='loading... '> */}
            <GlobalRoutes />
            <AuthModal />
            {/* </Suspense> */}
          </BrowserRouter>
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
