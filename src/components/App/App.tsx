import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../Layout/Layout";
import { Provider } from "react-redux";
import { store } from "../../store";

const App = (): JSX.Element => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false, staleTime: 24 * 60 * 60 * 1000 },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Layout />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
