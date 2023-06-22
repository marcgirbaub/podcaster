import React, { type PropsWithChildren } from "react";
import queryClientFactory from "./queryClientFactory";
import { QueryClientProvider } from "react-query";
import { render } from "@testing-library/react";
import { PreloadedState } from "@reduxjs/toolkit";
import { RootState, setupStore, store } from "../store";
import { Provider } from "react-redux";

const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const queryClient = queryClientFactory();

  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return (
      <QueryClientProvider client={queryClient}>
        <Provider store={testStore}>{children}</Provider>
      </QueryClientProvider>
    );
  };

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
