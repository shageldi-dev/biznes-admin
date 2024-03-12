import { Provider } from "react-redux";
import store from "./features/store";
// import { useState } from "react";

function App() {
  // const [started, setStarted] = useState(false);
  return (
    <Provider store={store}>
      <div>Hello</div>
    </Provider>
  );
}

export default App;
