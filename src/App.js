import { GlobalProvider } from "./context/GlobalState";
import Home from "./Home";

function App() {
  return (
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  );
}

export default App;
