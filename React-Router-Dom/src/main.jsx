import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
<<<<<<< HEAD
  </BrowserRouter>,
=======
  </BrowserRouter>
>>>>>>> 4ad380e (Add new components and configuration for multiple patterns; implement Tailwind CSS integration)
);
