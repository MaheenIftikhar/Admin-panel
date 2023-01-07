import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "react-circular-progressbar/dist/styles.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-dk441jf5lnzteo5c.us.auth0.com"
    clientId="wClKYIGPVmSYn11fnlUKZ9K4fuf3IiRt"
    redirectUri={window.location.origin}
  >
  
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
    </Auth0Provider>
    </React.StrictMode>
);
  
