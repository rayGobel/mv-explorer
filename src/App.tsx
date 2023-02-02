import React from 'react';
import type { ReactNode } from 'react';
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppContainer } from './_App';

const queryClient = new QueryClient()

function App() {
  return (
    <AppContainer className="App">
      <Outlet />
    </AppContainer>
  );
}

function QueryProvider(children: ReactNode) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default () => QueryProvider(<App />)
