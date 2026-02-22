import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "flowbite";
import App from "./App.jsx";
import { HeroUIProvider } from "@heroui/react";
import UserContextMainProvider from "./ChooseUserPage/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextMainProvider>
      <HeroUIProvider>
        <App />
      </HeroUIProvider>
    </UserContextMainProvider>
  </StrictMode>,
);
