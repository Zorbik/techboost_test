import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App.jsx";
import { persistor, store } from "./redux/store.js";
import { ChakraBaseProvider } from "@chakra-ui/react";
import theme from "./theme/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ChakraBaseProvider theme={theme}>
            <App />
          </ChakraBaseProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
