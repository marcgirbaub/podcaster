import { QueryClient } from "react-query";

const queryClientFactory = () => {
  return new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false } },
  });
};

export default queryClientFactory;
