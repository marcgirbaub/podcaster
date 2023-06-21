import React, { type PropsWithChildren } from "react";
import queryClientFactory from "./queryClientFactory";
import { QueryClientProvider } from "react-query";
import { render } from "@testing-library/react";

const renderWithProviders = (ui: React.ReactElement) => {
  const queryClient = queryClientFactory();

  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
