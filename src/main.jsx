import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "src/App";
import Bootstrap from "utils/Bootstrap";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        <Bootstrap />
    </StrictMode>
);
