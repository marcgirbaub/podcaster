import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";

const App = (): JSX.Element => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
};

export default App;
