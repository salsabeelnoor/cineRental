import { useReducer, useState } from "react";

import { MovieContext, ThemeContext } from "./context";
import { Bounce, ToastContainer} from 'react-toastify';

import Page from "./Page";
import { cartReducer, initialState } from "./reducers/CartReducer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <>
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
          />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
