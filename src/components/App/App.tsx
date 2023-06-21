import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../Layout/Layout";

const App = (): JSX.Element => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  );
};

export default App;
