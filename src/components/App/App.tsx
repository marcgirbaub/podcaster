import { QueryClient, QueryClientProvider } from "react-query";

const App = (): JSX.Element => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}></QueryClientProvider>
    </>
  );
};

export default App;
