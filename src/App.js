import Cart from "./components/Cart/Cart";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Cart />
      <ToastContainer newestOnTop />
    </div>
  );
}

export default App;
