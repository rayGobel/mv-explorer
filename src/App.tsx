import React from 'react';
import type { ReactNode } from 'react';
import { Outlet } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <article>
        <Outlet />
      </article>
    </div>
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
