import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

const App = lazy(() => delayForDemo(import("./App.tsx")));

import "./index.css";
import Loading from "./components/Loading.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>
);

function delayForDemo(promise: any) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
