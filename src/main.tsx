import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";
import React from "react";
import store, { persistor } from "./core/redux/index.ts";
import { PersistGate } from "redux-persist/integration/react";

// eslint-disable-next-line react-refresh/only-export-components
const MainApp:React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainApp />
  </StrictMode>
);
