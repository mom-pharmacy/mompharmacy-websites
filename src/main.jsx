import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { CareerProvider } from "./context/career";
import { ContactUsProvider } from "./context/contactUs";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContactUsProvider>
      <CareerProvider>
        <App />
      </CareerProvider>
    </ContactUsProvider>
  </BrowserRouter>
);
