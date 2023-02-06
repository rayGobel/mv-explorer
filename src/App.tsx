import React from "react";
import type { ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Button } from "~/components/Button";
import { TextBody } from "~/components/Text";
import { AppContainer, StyledNav } from "./_App";

const queryClient = new QueryClient();

function Nav() {
  return (
    <StyledNav>
      <TextBody>MVS</TextBody>
      <Link to="/">
        <TextBody>Movie List</TextBody>
      </Link>
      <Link to="/favorite-movies">
        <TextBody>Favorite List</TextBody>
      </Link>
    </StyledNav>
  );
}

function App() {
  return (
    <AppContainer className="App">
      <Nav />
      <Outlet />
    </AppContainer>
  );
}

function QueryProvider(children: ReactNode) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default () => QueryProvider(<App />);
