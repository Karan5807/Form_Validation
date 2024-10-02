import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const Root = createRoot(document.getElementById("root"));
Root.render(
  <StrictMode>
    <Auth0Provider
      domain="dev-uh6lzn1etkvebtg6.us.auth0.com"
      clientId="XtbcVmOfbtTwSYdzQdZP3raW1T66CQG6"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);