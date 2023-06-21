import { QueryClientProvider } from "react-query";
import queryClientFactory from "./queryClientFactory";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  const queryClient = queryClientFactory();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Wrapper;
